import React from 'react';
import styles from './pageTemplate.module.css';

/* Renders a page from the data on a json object.
   ob: json object from which the data will be rendered 
   
   returns: a jsx expression with the page elements rendered. */
function PageTemplate({ data }) {
    // Converts the string to a jsx expression
    console.log(data.transcripcion, "hola");
    const transcription = data.transcripcion.split('<br>').map(str => <React.Fragment >{str}<br /></React.Fragment>); 
    return (
        <main className={`${ styles.flex } ${ styles.flexColumnCentered }`}>
            <div className={ styles.wrapper }>
                <h1 className={ styles.title }>{ data.cliente }</h1>
                <h2 className={ styles.title }>Test: Test de usabilidad en el sitio web</h2>
                <h3 className={ styles.subtitle }>{ data.plataforma }</h3>
                <video className={ styles.centered } controls>
                    <source src={ data.linkVideo } type="video/mp4" />
                    Tu navegador no soporta el tag de video.
                </video>
                <h3 className={ styles.subtitle }>Transcripción</h3>
                <div className={ styles.scrollableBox }>
                    { transcription }
                </div>
                <h3 className={ styles.subtitle }>Tareas</h3>
                <p className={ styles.parragraph }>{`Escenario: ${data.escenario}`}</p>
            </div>
        </main>
    );
}

export { PageTemplate };