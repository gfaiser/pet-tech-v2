import { useState, useCallback, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import { db } from "../../lib/firebase";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { toast } from "react-toastify";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function BasicTabs() {
  const [value, setValue] = useState(0);
  const [saved, setSaved] = useState(false);
  const [state, setState] = useState({
    name: "",
    email: "",
    clinic: "",
    valueDate: null,
  });
  const [clinics, seClinics] = useState([]);
  const [dates, setDates] = useState([]);

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      try {
        const newData = new Date(state.valueDate);
        var dataFormatada =
          ("0" + newData.getDate()).substr(-2) +
          "/" +
          ("0" + (newData.getMonth() + 1)).substr(-2) +
          "/" +
          newData.getFullYear();

        if (
          Boolean(state.name) &&
          Boolean(state.email) &&
          Boolean(state.clinic) &&
          Boolean(dataFormatada)
        ) {
          await addDoc(collection(db, "calendar"), {
            ...state,
            valueDate: dataFormatada,
          });
          setState(
            {
              name: "",
              email: "",
              clinic: "",
              valueDate: null,
            },
            toast.success("Salvo com sucesso!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            })
          );
        } else {
          toast.warn("Deve preencher os campos", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      } catch (err) {
        console.log(err);
      }
    },
    [state]
  );

  const handleSubmitTab1 = (event) => {
    event.preventDefault();
    setSaved(true);
  };

  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
    setSaved(false);
  };

  const change = (evt) => {
    const field = evt.target.name;
    const value = evt.target.value;
    setState((prev) => ({ ...prev, [field]: value }));
  };

  useEffect(() => {
    const q = query(collection(db, "hospitals"), orderBy("name", "desc"));
    onSnapshot(q, (querySnapshot) => {
      seClinics(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });
    const q1 = query(collection(db, "calendar"));
    onSnapshot(q1, (querySnapshot) => {
      setDates(
        querySnapshot.docs
          .map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
          .map((i) => i.valueDate)
      );
    });
  }, []);

  return (
    <Container component="main" maxWidth="md">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ textAlign: "center", marginBottom: "32px" }}>
          <Typography variant="h4">Veterinário e Voluntário</Typography>
          <Typography variant="h6">Escolha uma opção:</Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Grid
              component={Button}
              variant={value === 0 ? "contained" : "outlined"}
              onClick={(evt) => handleChangeTab(evt, 0)}
              style={{ flexDirection: "column" }}
            >
              <Typography variant="body1">Veterinário</Typography>
              <Typography variant="caption">
                Cadastre sua agenda e local de atendimento
              </Typography>
            </Grid>
            <Grid
              component={Button}
              variant={value === 1 ? "contained" : "outlined"}
              onClick={(evt) => handleChangeTab(evt, 1)}
              style={{ flexDirection: "column" }}
            >
              <Typography variant="body1">Paciente</Typography>
              <Typography variant="caption">
                Consulte os horários disponíveis para antedimento
              </Typography>
            </Grid>
          </Box>

          <CustomTabPanel value={value} index={0}>
            <Box sx={{ textAlign: "center", marginBottom: "32px" }}>
              <Typography variant="h4">
                Registre um novo horário de atendimento
              </Typography>
              <Typography variant="h6">
                Você pode escolher uma data disponível para consultas online ou
                presencial.
              </Typography>
            </Box>
            <Box component="form" sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="name"
                    label="Nome"
                    name="name"
                    placeholder="Como devo te chamar?"
                    value={state.name}
                    onChange={change}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Endereço de email"
                    name="email"
                    autoComplete="email"
                    placeholder="Escreva seu email aqui"
                    value={state.email}
                    onChange={change}
                  />
                </Grid>
                <Grid item xs={12}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker"]}>
                      <DatePicker
                        label="Data"
                        value={state.valueDate}
                        onChange={(newValue) =>
                          setState((prev) => ({ ...prev, valueDate: newValue }))
                        }
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Onde será o atendimento
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={state.clinic}
                      label="Onde será o atendimento"
                      onChange={(evt) =>
                        setState((prev) => ({
                          ...prev,
                          clinic: evt.target.value,
                        }))
                      }
                    >
                      {clinics.map((row) => (
                        <MenuItem value={row.name} key={row.name}>
                          {row.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleSubmit}
                >
                  Salvar
                </Button>
              </Grid>
            </Box>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            {saved ? (
              <Box sx={{ textAlign: "center", marginTop: "40px" }}>
                <Typography variant="h4">
                  Salvo com sucesso. Você será informado por e-mail sobre as
                  atualizações do agendamento. Obrigado.
                </Typography>
                <CheckCircleOutlineRoundedIcon
                  style={{ width: 160, height: 160 }}
                />
              </Box>
            ) : (
              <>
                <Box sx={{ textAlign: "center", marginBottom: "32px" }}>
                  <Typography variant="h4">
                    Selecione uma data para atendimento
                  </Typography>
                  <Typography variant="h6">
                    Navegue no calendário para encontrar datas disponíveis para
                    o seu atendimento. Em seguida preencha o formulário abaixo
                    com os seus dados.
                  </Typography>
                </Box>

                <Box
                  component="form"
                  noValidate
                  onSubmit={handleSubmitTab1}
                  sx={{ mt: 3 }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="name"
                        label="Nome"
                        name="name"
                        placeholder="Como devo te chamar?"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="email"
                        label="Endereço de email"
                        name="email"
                        autoComplete="email"
                        placeholder="Escreva seu email aqui"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Datas disponíveis
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={state.clinic}
                          label="Onde será o atendimento"
                          onChange={(evt) =>
                            setState((prev) => ({
                              ...prev,
                              clinic: evt.target.value,
                            }))
                          }
                        >
                          {dates.map((row) => (
                            <MenuItem value={row} key={row}>
                              {row}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        id="description"
                        label="Informações do paciente"
                        name="description"
                        placeholder="Por favor, descreva aqui as suas informações"
                        multiline
                        rows={8}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                      >
                        Confirmar consulta
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </>
            )}
          </CustomTabPanel>
        </Box>
      </Box>
    </Container>
  );
}
