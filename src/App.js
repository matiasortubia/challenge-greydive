import data from './data/db.json';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { renderPage } from './utils/renderPage.jsx';

export default function App() {
    
  return (
    <Router>
        <Routes>
            <Route path='/' element={<h1>Index</h1>} />
            { data.map( el => (
                <Route path={ `/${el.cliente}` } key={ el.id } element={ renderPage(el) } />
            )) }
        </Routes>
    </Router>
  );
}
