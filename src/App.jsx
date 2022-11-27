import data from './data/db.json';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid'; 
import { Home } from './pages/Home.jsx';
import { PageTemplate } from './components/pageTemplate/PageTemplate.jsx';
import './App.css';

export default function App() {
  return (
      <Router>
          <Routes>
              <Route path='/' element={<Home data={ data } />} />
              { data.map( el => {
                return (
                  <Route path={ `/${el.cliente}` } 
                        key={ uuidv4() } 
                        element={ 
                          <PageTemplate content={ el } /> 
                        } />
                );
              }) }
          </Routes>
      </Router>
  );
}
