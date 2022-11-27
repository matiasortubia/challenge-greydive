import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Tareas } from '../tareas/Tareas.jsx';
import { Header } from '../header/Header.jsx';
import { ScrollToTop } from '../scrollToTop/ScrollToTop';
import styles from './pageTemplate.module.css';

/* Renders a page from the data on a json object.
   ob: json object from which the data will be rendered 
   
   returns: a jsx expression with the page elements rendered. */
function PageTemplate({ content, testerNumber }) {
    document.title = content.cliente + " | Challenge Greydive";

    const transcription = content.transcripcion.split('<br>').map(str => (
        <React.Fragment key={ uuidv4() }>{str}<br /></React.Fragment>
    )); 

    return (
        <>
            <Header />
            <div className={ styles.wrapper }>
                <main className={ styles.mainBox }>
                    <h2 className={ styles.title }>{ content.cliente }</h2>
                    <h2 className={ styles.title }>Test: Test de usabilidad en el sitio web</h2>
                    <h3 className={ styles.subtitle }>{ `Testeador ${ testerNumber }` }</h3>
                    <video className={ styles.centered } controls>
                        <source src={ content.linkVideo } type="video/mp4" />
                        Tu navegador no soporta el tag de video.
                    </video>
                    <h3 className={ styles.subtitle }>Transcripción</h3>
                    <div className={ styles.scrollableBox }>
                        <p>{ transcription }</p>
                    </div>
                    <h3 className={ styles.subtitle }>Tareas</h3>
                    <p className={ styles.introductionText }>{`Escenario: ${ content.escenario }`}</p>
                    <Tareas content={ content } />
                    <ScrollToTop />
                </main>
            </div>
        </>
    );
}

export { PageTemplate };