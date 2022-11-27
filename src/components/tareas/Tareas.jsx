import React from 'react'
import  {v4 as uuidv4 } from 'uuid';
import styles from './tareas.module.css';

const Tareas = ({ content }) => {

    return (
        <>
            { content.preguntas.map((item, i) => {
                const itemContent = item.texto.split('\\n').map(str => (
                    <React.Fragment key={ uuidv4() }>{str}<br /></React.Fragment>
                ));
                return (
                    <React.Fragment key={ uuidv4() }>
                        <div className={ styles.itemContainer }>
                            <strong>
                            {`Tarea ${ i }:`}
                            <br />
                            { itemContent }
                            </strong>
                            <br />
                            <p className={ styles.textoDuracion }>
                                {`Duración de la tarea: ${item.tiempo}`} 
                            </p>
                        </div>
                    </React.Fragment>
                );
            }) }
        </>
    );
}

export { Tareas };