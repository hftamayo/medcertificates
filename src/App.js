import logo from './logo.svg';
import './App.css';
import Saludos, { Envoltura, Saludo1, Saludo2 } from './Contenedores/Ejemplojsx';
import Libreria from './Contenedores/Ejemplojsx/Libreria';
import Menu from './Contenedores/Routing/Menu';
import Routing from './Contenedores/Routing';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <main>
        <div>
          <p>Pagina default de React.js</p>
        </div>
        <Routing />
      </main>
    </div>
  );
}

export default App;
