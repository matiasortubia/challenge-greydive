import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid'; 
import { Home } from './pages/Home.jsx';
import { PageTemplate } from './components/pageTemplate/PageTemplate.jsx';
import './App.css';
import data from './data/db.json';

export default function App() {
  return (
      <Router>
          <Routes>
              <Route path='/' element={<Home data={ data } />} />
              { data.map( (el, i) => {
                let testerNumber = i + 1;
                return (
                  <Route path={ `/${el.cliente}/testeador-${ testerNumber }` } 
                        key={ uuidv4() } 
                        element={ 
                          <PageTemplate content={ el } testerNumber={ testerNumber } /> 
                        } />
                );
              }) }
          </Routes>
      </Router>
  );
}
