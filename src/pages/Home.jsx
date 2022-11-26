import { Link } from "react-router-dom";
import styles from './home.module.css';
import { v4 as uuidv4 } from 'uuid';

const Home = ({ data }) => {
    return (
        <div className={ styles.wrapper }>
            <ul>
                { data.map(el => {
                return (
                <li key={ uuidv4() }>
                    <Link to={ `/${ el.cliente }` }>{ el.cliente }</Link>
                </li> );
                }) }
            </ul>
        </div>
    );
};

export { Home };