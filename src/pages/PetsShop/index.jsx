import { useState } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

export default function SignInSide() {
    const [state, setState] = useState(0)

    return (
        <Grid container component="main" sx={{ height: 'calc(100vh - 215px)' }}>
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
            >
                {
                    state === 0 ? (
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29244.19766332244!2d-46.53685769999998!3d-23.6213729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4292745d090d%3A0xce3310e0400af493!2sPet%20Shop%20Utinga!5e0!3m2!1spt-BR!2sbr!4v1685581258049!5m2!1spt-BR!2sbr"
                            width="100%"
                            height="100%"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    ) : (
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d31184.76432057781!2d-46.54813654649033!3d-23.644393858550494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1spet%20love!5e0!3m2!1spt-BR!2sbr!4v1685582447590!5m2!1spt-BR!2sbr"
                            width="100%"
                            height="100%"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    )
                }

            </Grid>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={0} square>
                <Box
                    sx={{
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Lojas
                    </Typography>
                </Box>
                <Divider />
                <ListItemButton component="button" style={{ display: "flex", flexDirection: "column" }} onClick={() => setState(0)}>
                    <ListItemText primary="Pet Shop Utinga" />
                    <Typography variant="caption">
                        O Pet Shop Utinga é um estabelecimento em Santo André, São Paulo, especializado em cuidados e serviços para animais de estimação, com foco em gatos. Oferecem uma ampla variedade de produtos e serviços para atender às necessidades dos felinos, incluindo alimentos nutritivos, acessórios, produtos de higiene e serviços de banho e tosa. No Pet Shop Utinga, eles se preocupam com o bem-estar e a saúde dos gatos, e estão comprometidos em fornecer um ambiente acolhedor e atendimento de qualidade para esses adoráveis companheiros felinos.
                    </Typography>
                </ListItemButton>
                <Divider />
                <ListItemButton component="button" style={{ display: "flex", flexDirection: "column" }} onClick={() => setState(1)}>
                    <ListItemText primary="Pet Love" />
                    <Typography variant="caption">
                        A Pet Love é dedicada ao bem-estar dos animais de estimação em Santo André, São Paulo. Oferecemos uma variedade de serviços, incluindo cuidados médicos, como consultas veterinárias e vacinação, além de serviços de banho e tosa. Nossa equipe altamente qualificada está comprometida em fornecer cuidados amorosos e atendimento personalizado para garantir o melhor cuidado possível aos animais. A Pet Love é uma referência na promoção do bem-estar animal e na busca por lares amorosos para os animais abandonados.
                    </Typography>
                </ListItemButton>
                <Divider />
            </Grid>
        </Grid>
    );
}