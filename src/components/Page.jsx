import styles from './page.module.css';

/* Renders a page from the data on a json object.
   ob: json object from which the data will be rendered 
   
   returns: a jsx expression with the page elements rendered. */
function Page({ data }) {
    return (
        <main className={`${ styles.flex } ${ styles.flexColumnCentered }`}>
            <div className={ styles.wrapper }>
                <h1 className={ styles.title }>{ data.cliente }</h1>
                <h2 className={ styles.title }>Test: Test de usabilidad en el sitio web</h2>
                <h3 className={ styles.subtitle }>{ data.plataforma }</h3>
                <video className={ styles.centered } controls>
                    <source src={ data.linkVideo } type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <h3 className={ styles.subtitle }>Transcripcion</h3>
                <div className={ styles.scrollableBox }>
                    { data.transcripcion }
                </div>
            </div>
        </main>
    );
}

export { Page };