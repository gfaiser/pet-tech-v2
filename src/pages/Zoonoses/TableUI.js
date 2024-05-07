import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export default function Orders({ dataTable = [] }) {
    if (dataTable.length === 0) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: '5%' }}>
                <Alert severity="info">Sem dados para mostrar.</Alert>
            </div>
        )
    }
    const headers = ['Nome', 'Espécie', 'Raça', 'Sexo', 'Tutor(a)', 'Número do chip', 'Veterinário(a)']
    return (
        <React.Fragment>
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pt: { xs: 14, sm: 20 },
                    pb: { xs: 8, sm: 12 },
                }}
            >
                <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
                    <Typography
                        variant="h1"
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            alignSelf: 'center',
                            textAlign: 'center',
                            fontSize: 'clamp(3.5rem, 10vw, 4rem)',
                        }}
                    >
                        Tabela com todos os chips cadastrados
                    </Typography>
                    <Typography
                        textAlign="center"
                        color="text.secondary"
                        sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
                    >
                        Explore our cutting-edge dashboard, delivering high-quality solutions
                        tailored to your needs. Elevate your experience with top-tier features
                        and services.
                    </Typography>
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        alignSelf="center"
                        spacing={1}
                        useFlexGap
                        sx={{ pt: 2, width: { xs: '100%', sm: '100%' } }}
                    >
                        <TextField
                            id="outlined-basic"
                            hiddenLabel
                            size="small"
                            variant="outlined"
                            aria-label="Codigo do chip"
                            placeholder="Insira o numero do chip"
                            inputProps={{
                                autoComplete: 'off',
                                'aria-label': 'Insira o numero do chip',
                            }}
                            type='number'
                            fullWidth
                        />
                        <Button variant="contained" color="primary">
                            Buscar
                        </Button>
                    </Stack>
                </Stack>
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
                    <div style={{ padding: 32 }}>
                        <p>Tabela de chips</p>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    {
                                        headers.map(i => <TableCell key={i}>{i}</TableCell>)
                                    }
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {dataTable.map((row) => (
                                    <TableRow key={row.name}>
                                        <TableCell>{row.name}</TableCell>
                                        <TableCell>{row.species}</TableCell>
                                        <TableCell>{row.race}</TableCell>
                                        <TableCell>{row.sex}</TableCell>
                                        <TableCell>{row.tutor}</TableCell>
                                        <TableCell>{row.chip}</TableCell>
                                        <TableCell>{row.veterinary}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </Box>
            </Container>

        </React.Fragment>
    );
}