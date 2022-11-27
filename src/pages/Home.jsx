import { Link } from "react-router-dom";
import styles from './home.module.css';
import { v4 as uuidv4 } from 'uuid';
import { Header } from '../components/header/Header.jsx';

const Home = ({ data }) => {
    document.title = "Inicio"
    return (
        <>
            <Header />
            <div className={ styles.wrapper }>
                <main className={ styles.mainBox }>
                    <ul>
                        { data.map(el => {
                        return (
                        <li key={ uuidv4() }>
                            <Link to={ `/${ el.cliente }` }>{ el.cliente }</Link>
                        </li> );
                        }) }
                    </ul>
                </main>
            </div>
        </>
    );
};

export { Home };