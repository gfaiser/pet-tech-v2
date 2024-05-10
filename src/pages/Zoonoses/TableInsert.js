import React, { useState, useCallback } from 'react';
import { toast } from 'react-toastify';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function TableInsert({ handleDataTable }) {
    const [state, setState] = useState({
        name: '',
        species: '',
        race: '',
        sex: '',
        tutor: '',
        chip: '',
        veterinary: 'Dr. Marcio'
    })

    const changeFields = (evt) => {
        const { value, name } = evt.target
        setState(prev => ({ ...prev, [name]: value }))
    }

    const submit = useCallback((evt) => {
        evt.preventDefault()
        handleDataTable(state)
        setState({
            name: '',
            species: '',
            race: '',
            sex: '',
            tutor: '',
            chip: '',
            veterinary: 'Dr. Marcio'
        },toast.success('Salvo com sucesso!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        }))
    }, [state])

    return (
        <React.Fragment>
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Box
                    id="image"
                    sx={(theme) => ({
                        mt: { xs: 8, sm: 10 },
                        alignSelf: 'center',
                        height: { xs: 200, sm: 700 },
                        width: '100%',
                        backgroundImage:
                            theme.palette.mode === 'light'
                                ? 'url("/static/images/templates/templates-images/hero-light.png")'
                                : 'url("/static/images/templates/templates-images/hero-dark.png")',
                        backgroundSize: 'cover',
                        borderRadius: '10px',
                        outline: '1px solid',
                        outlineColor:
                            theme.palette.mode === 'light'
                                ? alpha('#BFCCD9', 0.5)
                                : alpha('#9CCCFC', 0.1),
                        boxShadow:
                            theme.palette.mode === 'light'
                                ? `0 0 12px 8px ${alpha('#9CCCFC', 0.2)}`
                                : `0 0 24px 12px ${alpha('#033363', 0.2)}`,
                    })}
                >
                    <div style={{ padding: 32, display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                        <Typography
                            textAlign="center"
                            color="text.secondary"
                            sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
                        >
                            Explore our cutting-edge dashboard, delivering high-quality solutions
                            tailored to your needs. Elevate your experience with top-tier features
                            and services.
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Box component="form" noValidate onSubmit={submit} sx={{ mt: 3 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="name"
                                            label="Nome"
                                            name="name"
                                            onChange={changeFields}
                                            value={state.name}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="species"
                                            label="Espécie"
                                            name="species"
                                            onChange={changeFields}
                                            value={state.species}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="race"
                                            label="Raça"
                                            name="race"
                                            onChange={changeFields}
                                            value={state.race}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="sex"
                                            label="Sexo"
                                            name="sex"
                                            onChange={changeFields}
                                            value={state.sex}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="tutor"
                                            label="Tutor(a)"
                                            name="tutor"
                                            onChange={changeFields}
                                            value={state.tutor}
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="chip"
                                            label="Número do chip"
                                            name="chip"
                                            onChange={changeFields}
                                            value={state.chip}
                                            type='number'
                                        />
                                    </Grid>
                                </Grid>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Enviar
                                </Button>
                            </Box>
                        </Box>
                    </div>
                </Box>
            </Container>

        </React.Fragment>
    );
}