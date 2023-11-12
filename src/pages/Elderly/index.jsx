import { Container, Grid } from '@mui/material';

import Main from './Main';
import Sidebar from './Sidebar';

const posts = [{
    title: "10 Dicas Essenciais para uma Casa Segura para Gatos", date: "July 19, 2021 // 4 min read", description: `Descubra como criar um ambiente seguro e livre de riscos para o seu gato, com dicas sobre plantas tóxicas, produtos de limpeza seguros e precauções em ambientes externos.`
}, {
    title: "Os Melhores Brinquedos para Manter Seu Gato Ativo e Entretido", date: "March 23, 2021 by Matt", description: `Explore uma variedade de brinquedos interativos que estimulam o exercício físico e mental do seu gato, mantendo-o entretido e evitando comportamentos indesejados.`
}, {
    title: "Alimentação Adequada: Nutrição e Dietas para Gatos", date: "February 23, 2021 by Matt", description: `Aprenda sobre as necessidades nutricionais dos gatos, os diferentes tipos de alimentos disponíveis, como escolher a ração ideal e dicas para evitar problemas de alimentação`
}, {
    title: "Cuidados com a Pelagem: Como Manter o Pelo do seu Gato Saudável", date: "November 22, 2020 by Matt", description: `Descubra os segredos para manter a pelagem do seu gato brilhante e saudável, incluindo técnicas de escovação, banho adequado e dicas para lidar com nós e bolas de pelo.`
}, {
    title: "A Importância da Caixa de Areia: Dicas de Higiene e Treinamento", date: "September 15, 2020 by Matt", description: `Saiba como escolher a caixa de areia correta, como ensinar seu gato a usá-la, dicas de higiene e soluções para problemas de eliminação inadequada.`
}, {
    title: "Cuidando da Saúde do seu Gato: Exames Veterinários e Vacinação", date: "August 2, 2020 by Matt", description: `Descubra a importância de levar seu gato ao veterinário regularmente, quais exames são essenciais, o calendário de vacinação recomendado e dicas para lidar com visitas ao consultório.`
}, {
    title: "Dicas para Lidar com o Estresse em Gatos: Técnicas de Relaxamento", date: "September 23, 1999 by Matt", description: `Explore estratégias para ajudar seu gato a lidar com situações estressantes, incluindo técnicas de relaxamento, uso de feromônios sintéticos e criação de ambientes tranquilos.`
}];

const sidebar = {
    title: 'Sobre',
    description:
        'Aqui você encontra as melhores matérias sobre gatos, feitas por quem ama seus bichinhos, sem enrolação e com criatividade, aqui ficara os melhores posts do blog.',
    archives: [
        { title: 'March 2020', url: '#' },
        { title: 'February 2020', url: '#' },
        { title: 'January 2020', url: '#' },
        { title: 'November 1999', url: '#' },
        { title: 'October 1999', url: '#' },
        { title: 'September 1999', url: '#' },
    ],
    social: [
        { name: 'GitHub', icon: "GitHubIcon" },
        { name: 'Twitter', icon: "TwitterIcon" },
        { name: 'Facebook', icon: "FacebookIcon" },
    ],
};

const Page = () => {
    return (
        <Container maxWidth="lg">
            <main>
                <Grid container spacing={5} sx={{ mt: 3 }}>
                    <Main title="Cuidados, dicas e soluções para manter a saúde dos idosos no convívio com seus gatos!" posts={posts} />
                    <Sidebar
                        title={sidebar.title}
                        description={sidebar.description}
                        archives={sidebar.archives}
                        social={sidebar.social}
                    />
                </Grid>
            </main>
        </Container>
    )
}

export default Page