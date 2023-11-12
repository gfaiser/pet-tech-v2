import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Table from './Table'


export default function SignInSide() {
    const handleSubmit = (event) => {
        const data = new FormData(event.currentTarget)
        let dateLocal = localStorage.getItem('date-local')
        let dateArray = JSON.parse(dateLocal) || []

        if (!dateArray.some(i => i.name === data.get('name'))) {
            localStorage.setItem('date-local', JSON.stringify([...dateArray, {
                name: data.get('name'),
                phone: data.get('phone'),
                address: data.get('address'),
            }]))
        }
    }

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
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Nome da Clínica ou Hospital"
                            name="name"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="phone"
                            label="Telefone para Contato"
                            name="phone"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="address"
                            label="Endereço"
                            name="address"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Salvar
                        </Button>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}