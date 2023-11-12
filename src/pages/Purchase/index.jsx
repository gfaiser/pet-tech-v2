import { Container, Grid, Divider } from '@mui/material';
import Typography from '@mui/material/Typography';

const Page = () => {
    return (
        <Container maxWidth="lg">
            <main>
                <Grid style={{ margin: "32px 0" }}>
                    <Typography variant='h4' gutterBottom>Comprar ou adotar</Typography>
                    <Typography variant='body2' gutterBottom>July 19, 2020 // 4 min read</Typography>
                    <Divider style={{ margin: "16px 0" }} />
                    <Typography variant='body1' style={{ lineHeight: "2rem" }} gutterBottom>
                        Comparar a compra de gatos com a adoção de gatos é um tema relevante quando se discute a responsabilidade de trazer um novo felino para o lar. Ambas as opções têm suas peculiaridades e é essencial entender os prós e os contras antes de tomar uma decisão.
                    </Typography>
                    <Typography variant='body1' style={{ lineHeight: "2rem" }} gutterBottom>
                        Ao comprar um gato de raça pura de um criador ou loja de animais, você geralmente tem a garantia de conhecer a linhagem, a aparência e algumas características do animal. Além disso, alguns compradores podem ter preferências específicas em termos de temperamento, pelagem ou raça. A compra de gatos pode ser uma opção adequada para aqueles que buscam gatos com traços específicos ou desejam participar de competições de beleza felina.
                    </Typography>
                    <Typography variant='body1' style={{ lineHeight: "2rem" }} gutterBottom>
                        Por outro lado, a adoção de gatos de abrigos ou resgates é uma opção que merece consideração. Existem inúmeros gatos abandonados ou sem lar esperando por uma segunda chance. A adoção de um gato resgatado oferece a oportunidade de dar a ele um lar amoroso e seguro. Os gatos adotados geralmente são esterilizados, vacinados e examinados por um veterinário, o que pode economizar custos iniciais de cuidados de saúde. Além disso, muitos gatos resgatados são misturas de raças ou possuem características únicas, tornando-os igualmente especiais e adoráveis.
                    </Typography>
                    <Typography variant='body1' style={{ lineHeight: "2rem" }} gutterBottom>
                        Ao adotar um gato, você está contribuindo para a redução do número de animais abandonados e auxiliando organizações que trabalham arduamente para cuidar desses animais necessitados. Adicionalmente, a conexão emocional que se estabelece ao adotar um gato pode ser profundamente gratificante, pois você está oferecendo uma nova vida a um ser que precisava desesperadamente de amor e segurança.
                    </Typography>
                    <Typography variant='body1' style={{ lineHeight: "2rem" }} gutterBottom>
                        Independentemente da escolha, é crucial lembrar que trazer um gato para casa requer compromisso e responsabilidade. Todos os gatos precisam de cuidados adequados, incluindo alimentação adequada, atenção veterinária regular, estímulo físico e mental, e um ambiente seguro. É importante dedicar tempo e recursos para fornecer um ambiente saudável e amoroso, independentemente de ter comprado ou adotado um gato.
                    </Typography>
                    <Typography variant='body1' style={{ lineHeight: "2rem" }} gutterBottom>
                        No final das contas, tanto a compra como a adoção de gatos podem ser ótimas opções, dependendo das necessidades e preferências individuais. O importante é garantir que a decisão seja tomada com consciência, considerando o bem-estar do gato e contribuindo para a promoção do cuidado animal responsável.
                    </Typography>
                </Grid>
            </main>
        </Container>
    )
}

export default Page