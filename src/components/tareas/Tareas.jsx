import styles from './tareas.module.css';

const Tareas = ({ content }) => {

    return (
        <>
            <h3 className={ styles.subtitle }>Tareas</h3>
            <p>{`Escenario: ${content.escenario}`}</p>
            { content.preguntas.map((item, i) => {
                const itemContent = item.texto.replace('\\n', '\n')
                return (
                    <>
                        <hr />
                        <div className={ styles.itemContainer }>
                            <strong>
                            {`Tarea ${ i }:`}
                            <br />
                            { itemContent }
                            </strong>
                            <p className={ styles.textoDuracion }>
                                {`Duración de la tarea: ${item.tiempo}`} 
                            </p>
                        </div>
                    </>
                );
            }) }
        </>
    );
}

export { Tareas };