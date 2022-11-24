/* Function that renders a page from the data on a json object.
   ob: json object from which the data will be rendered 
   
   returns: a jsx expression with the page. */
function renderPage(ob) {
    return (
        <main>
            <h1>{ ob.cliente }</h1>
            <h2>{ ob.plataforma }</h2>
            <video controls>
              <source src={ ob.linkVideo } type="video/mp4" />
              Your browser does not support the video tag.
            </video>
        </main>
    );
}

export { renderPage };