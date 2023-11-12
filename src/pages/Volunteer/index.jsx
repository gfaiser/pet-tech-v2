import { useState, useCallback } from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';

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
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

export default function BasicTabs() {
    const [value, setValue] = useState(0);
    const [clinic, setClinic] = useState('')
    const [valueDate, setValueDate] = useState(null)
    const [saved, setSaved] = useState(false)

    const handleSubmit = useCallback((event) => {
        const data = new FormData(event.currentTarget);
        let dateLocal1 = localStorage.getItem('date-local-1')
        let dateArray1 = JSON.parse(dateLocal1) || []

        localStorage.setItem('date-local-1', JSON.stringify([...dateArray1, {
            name: data.get('name'),
            email: data.get('email'),
            clinic: clinic,
            date: valueDate
        }]))

    }, [clinic, valueDate])

    const handleSubmitTab1 = (event) => {
        event.preventDefault()
        setSaved(true)
    }

    const getClinics = () => {
        let dateLocal = localStorage.getItem('date-local')
        let dateArray = JSON.parse(dateLocal) || []
        return dateArray
    }

    const getDates = () => {
        let dateLocal = localStorage.getItem('date-local-1')
        let dateArray = JSON.parse(dateLocal) || []
        return dateArray.map(i => i.date)
    }

    const handleChangeTab = (event, newValue) => {
        setValue(newValue);
        setSaved(false)
    };

    const handleChangeClinic = (event) => {
        setClinic(event.target.value);
    };

    return (
        <Container component="main" maxWidth="md">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Box sx={{ textAlign: "center", marginBottom: "32px" }}>
                    <Typography variant='h4'>Veterinário e Voluntário</Typography>
                    <Typography variant='h6'>Escolha uma opção:</Typography>
                </Box>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Grid
                            component={Button}
                            variant="outlined"
                            onClick={evt => handleChangeTab(evt, 0)}
                            style={{ flexDirection: "column" }}
                        >
                            <Typography variant='body1'>Veterinário</Typography>
                            <Typography variant='caption'>Cadastre sua agenda e local de atendimento</Typography>
                        </Grid>
                        <Grid
                            component={Button}
                            variant="outlined"
                            onClick={evt => handleChangeTab(evt, 1)}
                            style={{ flexDirection: "column" }}
                        >
                            <Typography variant='body1'>Paciente</Typography>
                            <Typography variant='caption'>Consulte os horários disponíveis para antedimento</Typography>
                        </Grid>
                    </Box>

                    <CustomTabPanel value={value} index={0}>
                        <Box sx={{ textAlign: "center", marginBottom: "32px" }}>
                            <Typography variant='h4'>Registre um novo horário de atendimento</Typography>
                            <Typography variant='h6'>Você pode escolher uma data disponível para consultas online ou presencial.</Typography>
                        </Box>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="name"
                                        label="Nome"
                                        name="name"
                                        placeholder='Como devo te chamar?'
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
                                        placeholder='Escreva seu email aqui'
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DemoContainer components={['DatePicker']}>
                                            <DatePicker
                                                label="Data"
                                                value={valueDate}
                                                onChange={(newValue) => setValueDate(newValue)}
                                            />
                                        </DemoContainer>
                                    </LocalizationProvider>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Onde será o atendimento</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={clinic}
                                            label="Onde será o atendimento"
                                            onChange={handleChangeClinic}
                                        >
                                            {getClinics().map(row => <MenuItem value={row.name} key={row.name}>{row.name}</MenuItem>)}
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
                                >
                                    Salvar
                                </Button>
                            </Grid>
                        </Box>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                        {
                            saved ? (
                                <Box sx={{ textAlign: "center", marginTop: "40px" }}>
                                    <Typography variant='h4'>Salvo com sucesso. Você será informado por e-mail sobre as atualizações do agendamento. Obrigado.</Typography>
                                    <CheckCircleOutlineRoundedIcon style={{ width: 160, height: 160 }} />
                                </Box>
                            ) : (
                                <>
                                    <Box sx={{ textAlign: "center", marginBottom: "32px" }}>
                                        <Typography variant='h4'>Selecione uma data para atendimento</Typography>
                                        <Typography variant='h6'>Navegue no calendário para encontrar datas disponíveis para o seu atendimento. Em seguida preencha o formulário abaixo com os seus dados.</Typography>
                                    </Box>

                                    <Box component="form" noValidate onSubmit={handleSubmitTab1} sx={{ mt: 3 }}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <TextField
                                                    required
                                                    fullWidth
                                                    id="name"
                                                    label="Nome"
                                                    name="name"
                                                    placeholder='Como devo te chamar?'
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
                                                    placeholder='Escreva seu email aqui'
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label">Datas disponíveis</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={clinic}
                                                        label="Onde será o atendimento"
                                                        onChange={handleChangeClinic}
                                                    >
                                                        {getDates().map(row => <MenuItem value={row} key={row}>{row}</MenuItem>)}
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    fullWidth
                                                    id="description"
                                                    label="Informações do paciente"
                                                    name="description"
                                                    placeholder='Por favor, descreva aqui as suas informações'
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
                            )
                        }

                    </CustomTabPanel>
                </Box>
            </Box >
        </Container >
    );
}
