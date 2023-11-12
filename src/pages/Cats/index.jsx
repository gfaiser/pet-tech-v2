import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


const cards = [{
    image: "https://images.unsplash.com/photo-1604916287784-c324202b3205?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80",
    name: "Luna",
    desc: "Descrição: Luna é uma gata preta de olhos verdes brilhantes. Ela é muito brincalhona e adora perseguir bolinhas de lã."
}, {
    image: "https://images.unsplash.com/photo-1593483316242-efb5420596ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    name: "Simba",
    desc: "Descrição: Simba é um gato laranja com listras pretas. Ele é um tanto preguiçoso, mas adora cochilar ao sol e receber carinho na barriga."
}, {
    image: "https://images.unsplash.com/photo-1606208427954-aa8319c4815e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    name: "Mia",
    desc: "Descrição: Mia é uma gata branca e cinza com manchas delicadas. Ela é bastante curiosa e está sempre explorando novos cantinhos da casa."
}, {
    image: "https://images.unsplash.com/photo-1472053217156-31b42df2319c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    name: "Oliver",
    desc: "Descrição: Oliver é um gato cinza de pelos longos. Ele é um verdadeiro galanteador, adora brincar e é extremamente afetuoso com todos."
}, {
    image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=715&q=80",
    name: "Chloe",
    desc: "Descrição: Chloe é uma gata tigrada de pelos curtos. Ela é uma excelente caçadora e adora passar horas perseguindo insetos no jardim."
}, {
    image: "https://images.unsplash.com/photo-1588943011511-ef303c037195?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    name: "Max",
    desc: "Descrição: Max é um gato preto e branco com um olhar penetrante. Ele é um tanto reservado, mas quando se solta, mostra um lado brincalhão e amoroso."
}, {
    image: "https://images.unsplash.com/photo-1555036803-4b8b34490116?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    name: "Bella",
    desc: "Descrição: Bella é uma gata siamesa de olhos azuis brilhantes. Ela é muito falante e adora 'conversar' com seus donos, expressando suas opiniões."
}, {
    image: "https://images.unsplash.com/photo-1610121172299-5f3c7c55bccd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    name: "Milo",
    desc: "Descrição: Milo é um gato marrom com manchas pretas. Ele é um explorador nato e está sempre se aventurando pelos lugares mais inusitados da casa."
}, {
    image: "https://images.unsplash.com/photo-1653645065498-a52a1046d3e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    name: "Lucy",
    desc: "Descrição: Lucy é uma gata tricolor de pelos macios. Ela é uma verdadeira companheira e gosta de se aconchegar no colo de seus donos enquanto assistem TV."
}, {
    image: "https://images.unsplash.com/photo-1571566882372-1598d88abd90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    name: "Charlie",
    desc: "Descrição: Charlie é um gato ruivo de porte imponente. Ele é um verdadeiro líder entre os felinos, sempre defendendo seu território com garra e coragem."
}, {
    image: "https://images.unsplash.com/photo-1604916287784-c324202b3205?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80",
    name: "Luna",
    desc: "Descrição: Luna é uma gata preta de olhos verdes brilhantes. Ela é muito brincalhona e adora perseguir bolinhas de lã."
}, {
    image: "https://images.unsplash.com/photo-1593483316242-efb5420596ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    name: "Simba",
    desc: "Descrição: Simba é um gato laranja com listras pretas. Ele é um tanto preguiçoso, mas adora cochilar ao sol e receber carinho na barriga."
}
];

export default function Album() {
    return (
        <main>
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    pt: 8,
                    pb: 6,
                }}
            >
                <Container maxWidth="sm">
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                        gutterBottom
                    >
                        Gatos
                    </Typography>
                    <Typography variant="h5" align="center" color="text.secondary" paragraph>
                        Cuidados com a saúde do seu bichano! Como evitar contaminações!
                    </Typography>
                </Container>
            </Box>
            <Container sx={{ py: 8 }} maxWidth="md">
                <Grid container spacing={4}>
                    {cards.map((card) => (
                        <Grid item key={card.name} xs={12} sm={6} md={4}>
                            <Card
                                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                            >
                                <CardMedia
                                    component="div"
                                    sx={{
                                        // 16:9
                                        pt: '56.25%',
                                    }}
                                    image={card.image}
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {card.name}
                                    </Typography>
                                    <Typography>
                                        {card.desc}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </main>
    );
}