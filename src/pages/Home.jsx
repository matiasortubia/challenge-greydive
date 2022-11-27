import styles from './home.module.css';
import { Header } from '../components/header/Header.jsx';
import { LinksList } from '../components/linksList/linksList.jsx';

const Home = ({ data }) => {
    document.title = "Inicio | Challenge Greydive"
    return (
        <>
            <Header />
            <div className={ styles.wrapper }>
                <main className={ styles.mainBox }>
                    <h2>Tests</h2>
                    <LinksList data={ data }/>
                </main>
            </div>
        </>
    );
};

export { Home };