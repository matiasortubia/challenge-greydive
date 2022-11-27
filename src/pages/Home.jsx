import { Link } from "react-router-dom";
import styles from './home.module.css';
import { v4 as uuidv4 } from 'uuid';
import { Header } from '../components/header/Header.jsx';

const Home = ({ data }) => {
    document.title = "Inicio | Challenge Greydive"
    return (
        <>
            <Header />
            <div className={ styles.wrapper }>
                <main className={ styles.mainBox }>
                    <h2>Tests</h2>
                    <div className={ styles.linksContainer }>
                        { data.map((el, i) => {
                        let testerNumber = i + 1;
                        return (
                            <Link to={ `/${ el.cliente }/testeador-${ testerNumber }` } 
                                  key={ uuidv4() }>
                                <button className={ styles.linkBox } key={ uuidv4() }>
                                    { el.cliente }
                                    <p className={ styles.testerText }>
                                        { `Testeador ${ testerNumber }` }
                                    </p>
                                </button>        
                            </Link>
                            );
                        }) }
                    </div>
                </main>
            </div>
        </>
    );
};

export { Home };