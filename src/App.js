import './App.css';
import Home from './pages/Home'
import { BrowserRouter,Route, Switch } from 'react-router-dom'
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
import Portafolio from './pages/Portafolio';
import Servicios from './pages/Servicios';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/pages/nosotros" component={Nosotros} />
          <Route exact path="/pages/servicios" component={Servicios} />
          <Route exact path="/pages/contacto" component={Contacto} />
          <Route exact path="/pages/portafolio" component={Portafolio} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
