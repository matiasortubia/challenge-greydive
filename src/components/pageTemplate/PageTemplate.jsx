import React from 'react';
import styles from './pageTemplate.module.css';

/* Renders a page from the data on a json object.
   ob: json object from which the data will be rendered 
   
   returns: a jsx expression with the page elements rendered. */
function PageTemplate({ content }) {
    // Converts the string to a jsx expression
    const transcription = content.transcripcion.split('<br>').map(str => <React.Fragment >{str}<br /></React.Fragment>); 
    return (
        <>
            <div className={ styles.wrapper }>
                <main className={ styles.mainBox }>
                <h1 className={ styles.title }>{ content.cliente }</h1>
                <h2 className={ styles.title }>Test: Test de usabilidad en el sitio web</h2>
                <h3 className={ styles.subtitle }>{ content.plataforma }</h3>
                <video className={ styles.centered } controls>
                    <source src={ content.linkVideo } type="video/mp4" />
                    Tu navegador no soporta el tag de video.
                </video>
                <h3 className={ styles.subtitle }>Transcripción</h3>
                <div className={ styles.scrollableBox }>
                    { transcription }
                </div>
                <h3 className={ styles.subtitle }>Tareas</h3>
                <p>{`Escenario: ${content.escenario}`}</p>
</main>
            </div>
</>
    );
}

export { PageTemplate };