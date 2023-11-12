import { Link } from 'react-router-dom';
import styles from '../styles/Home.module.css';
import Typography from '@mui/material/Typography';

const textShadow = {
    color: "white",
    fontWeight: 700,
    textShadow: `1px 1px 1px #666,
  1px 1px 1px #666,
  1px 1px 1px #666,
  1px 1px 1px #666,
  1px 1px 1px #666,
  1px 1px 1px #666,
  1px 1px 1px #666,
  1px 1px 1px #666,
  1px 1px 1px #666,
  1px 1px 1px #666,
  1px 5px 6px rgba(16, 16, 16, .4),
  1px 5px 10px rgba(16, 16, 16, .2),
  1px 5px 35px rgba(16, 16, 16, .2),
  1px 5px 60px rgba(16, 16, 16, .2)`
}

const Content = ({ title = '', desc = "" }) => {
    return (
        <div style={{ width: 200 }}>
            <div style={{ marginBottom: 8, padding: "0 16px" }}>
                <Typography variant='h4' style={{ ...textShadow }}>
                    {title}
                </Typography>
            </div>
            <Typography variant='body2' style={{ ...textShadow, fontWeight: 400 }}>
                {desc}
            </Typography>
        </div>
    )
}

function Home() {
    return (
        <div className={styles.content} style={{ backgroundImage: 'url(/assets/backgraound.jpg)' }}>
            <div className={styles.content_title}>
                <img src="/assets/logo.png" width={300} alt="logo" />
                <Typography variant='h3' style={{ ...textShadow, marginBottom: 32 }}>
                    Idosos & Gatos
                </Typography>
            </div>
            <main className={styles.content_main}>
                <Link to='pg/elderly' className={`${styles.circle} ${styles.circle_1}`}>
                    <Content title="Idosos" desc="Cuidados, dicas e soluções para manter a saúde dos idosos no convívio com seus gatos!" />
                </Link>
                <Link to='pg/contact' className={`${styles.circle} ${styles.circle_2}`}>
                    <Content title="Equipe" desc="Quem fez e faz!" />
                </Link>
                <Link to='pg/purchase' className={`${styles.circle} ${styles.circle_4}`}>
                    <Content title="Comprar ou adotar" desc="Como decidir? E o que fazer?" />
                </Link>
                <Link to='pg/cats' className={`${styles.circle} ${styles.circle_5}`}>
                    <Content title="Gatos" desc="Cuidados com a saúde do seu bichano! Como evitar contaminações!" />
                </Link>
                <Link to='pg/pets-shop' className={`${styles.circle} ${styles.circle_6}`}>
                    <Content title="Pet shops" desc="Onde encontrar o que você precisa?" />
                </Link>
                <Link to='pg/hospitals' className={`${styles.circle} ${styles.circle_8}`}>
                    <Content title="Hospitais e clínicas" desc="Encontre perto da sua casa!" />
                </Link>
                <Link to="pg/volunteer" className={`${styles.circle} ${styles.circle_9}`}>
                    <Content title="Veterinário Voluntario" desc="Agenda" />
                </Link>
            </main>
        </div>
    );
}

export default Home;