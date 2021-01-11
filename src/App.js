/*import logo from './logo.svg';*/
import './App.css';
import Routing from './Contenedores/Routing';
import { Box, Grommet } from 'grommet';
import PageHeader from './Contenedores/Routing/PageHeader';
import { HashRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { themes } from './utils';

function App() {
  const selectedTheme = useSelector((state) => state.main.theme);

  return (
    <Grommet theme={themes[selectedTheme]}>
      <HashRouter>
        <PageHeader />
        <Box pad="medium">
          <Routing />
        </Box>
      </HashRouter>
    </Grommet>
  );
}


export default App;
