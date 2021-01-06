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
        {/*<Saludos />*/}
        {/*<Saludo1 color="green" bgColor="yellow" text="saludo1 modificado"/>*/
}        {/*<Saludo2 />*/}

        {/*<Envoltura styles={{backgroundColor: 'lightblue'}}>*/}
          {/*<Saludo1 />*/}
          {/*<Saludo2 />*/}
        {/*</Envoltura>*/}

        {/*<Libreria />*/}
        {/*<Libreria />*/}
      </main>
    </div>
  );
}

export default App;
