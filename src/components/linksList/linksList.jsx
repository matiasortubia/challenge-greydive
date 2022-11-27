import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import styles from './linksList.module.css';

const LinksList = ({ data }) => {
    return (
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
    );
}

export { LinksList };