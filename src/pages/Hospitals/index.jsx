import { useState, useCallback } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { db } from '../../lib/firebase'
import { collection, addDoc } from 'firebase/firestore'
import { toast } from 'react-toastify';

import Table from './Table'

export default function SignInSide() {
    const [state, setState] = useState({
        name: "",
        phone: "",
        address: "",
    })

    const change = (evt) => {
        const field = evt.target.name
        const value = evt.target.value
        setState(prev => ({ ...prev, [field]: value }))
    }

    const handleSubmit = useCallback(async (event) => {
        event.preventDefault()
        try {
            if (Boolean(state.name) && Boolean(state.phone) && Boolean(state.address)) {
                await addDoc(collection(db, 'hospitals'), state)
                setState({
                    name: "",
                    phone: "",
                    address: "",
                }, toast.success('Salvo com sucesso!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                }))
            } else {
                toast.warn('Deve preencher os campos', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
            }

        } catch (err) {
            console.log(err)
        }
    }, [state])

    return (
        <Grid container component="main" sx={{ height: 'calc(100vh - 215px)', backgroundColor: "#e0e0e0" }}>
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                style={{ padding: "32px 16px" }}
            >
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                    <Table />
                </Paper>
            </Grid>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={0} square>
                <Box
                    sx={{
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Hospitais e Clínicas
                    </Typography>
                    <Box sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Nome da Clínica ou Hospital"
                            name="name"
                            value={state.name}
                            onChange={change}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="phone"
                            label="Telefone para Contato"
                            name="phone"
                            value={state.phone}
                            onChange={change}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="address"
                            label="Endereço"
                            name="address"
                            value={state.address}
                            onChange={change}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={handleSubmit}
                        >
                            Salvar
                        </Button>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}