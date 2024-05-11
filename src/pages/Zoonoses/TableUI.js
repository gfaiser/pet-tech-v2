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
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export default function Orders({ dataTable = [], handleFiltro, basic = false }) {
    const [numberChip, setNumberChip] = React.useState('')
    const headers = !basic
        ? ['Nome', 'Espécie', 'Raça', 'Veterinário(a)']
        : ['Nome', 'Espécie', 'Raça', 'Sexo', 'Tutor(a)', 'Número do chip', 'Veterinário(a)' , 'Doenças', 'Endereço']

    const data = dataTable.find(i => i.chip === numberChip)

    if (!basic) {
        return (
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pt: { xs: 4, sm: 4 },
                    pb: { xs: 4, sm: 4 },
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
                        Bem vindo, digite o numero do chip para consultar
                    </Typography>

                    <Stack style={{ display: "flex", flexDirection: "row", gap: 8 }}>
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
                            onChange={evt => setNumberChip(evt.target.value)}
                            value={numberChip}
                        />
                        <Button variant="contained" color="primary" onClick={() => handleFiltro(numberChip)}>
                            Buscar
                        </Button>
                        <Button variant="outlined" color="secondary" onClick={() => {
                            setNumberChip('', handleFiltro(null, true))
                        }}>
                            Limpar
                        </Button>
                    </Stack>
                </Stack>
                {
                    (!data && numberChip) && (
                        <div style={{ display: 'flex', justifyContent: 'center', padding: '5%', width: '100%' }}>
                            <Alert severity="info">Sem dados para mostrar.</Alert>
                        </div>
                    )
                }

                {data &&
                    <Stack style={{ padding: '72px 32px', width: '100%' }}>
                        <Card sx={{ display: 'flex', width: '100%' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h5">
                                        {data.name}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        Tutor: {data.tutor}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        Veterinário(a): {data.veterinary}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        Doenças: {data.illnesses}
                                    </Typography>
                                </CardContent>
                            </Box>
                            <CardMedia
                                component="img"
                                sx={{ width: 251 }}
                                image={data.image}
                                alt="Live from space album cover"
                            />
                        </Card>
                    </Stack>
                }
            </Container>
        )
    }

    return (
        <React.Fragment>
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pt: { xs: 4, sm: 4 },
                    pb: { xs: 4, sm: 4 },
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
                        {basic
                            ? 'Tabela com todos os chips cadastrados'
                            : 'Bem vindo, digite o numero do chip para consultar'}
                    </Typography>

                    <Stack style={{ display: "flex", flexDirection: "row", gap: 8 }}>
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
                            onChange={evt => setNumberChip(evt.target.value)}
                            value={numberChip}
                        />
                        <Button variant="contained" color="primary" onClick={() => handleFiltro(numberChip)}>
                            Buscar
                        </Button>
                        <Button variant="outlined" color="secondary" onClick={() => {
                            setNumberChip('', handleFiltro(null, true))
                        }}>
                            Limpar
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
                        {dataTable.length === 0 ? (
                            <div style={{ display: 'flex', justifyContent: 'center', padding: '5%', width: '100%' }}>
                                <Alert severity="info">Sem dados para mostrar.</Alert>
                            </div>
                        ) : (
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
                                            <TableCell>{row.illnesses}</TableCell>
                                            <TableCell>{row.address}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        )}

                    </div>
                </Box>
            </Container>

        </React.Fragment>
    );
}