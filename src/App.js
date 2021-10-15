import './App.css';
import Home from './pages/Home'
import { BrowserRouter,Route, Switch } from 'react-router-dom'
import Nosotros from './pages/Nosotros';


function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Switch>

          <Route exact path="/" component={Home} />
          <Route exact path="/pages/nosotros" component={Nosotros} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
