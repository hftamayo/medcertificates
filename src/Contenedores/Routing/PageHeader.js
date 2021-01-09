import React from 'react';
import { Box, Header, Nav, Select, Text } from 'grommet';
import { DocumentStore, Group, Reactjs} from 'grommet-icons';
import { Link, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { setNewTheme } from '../../redux/actions';
import { themes } from '../../utils';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../../Componentes/LoginButton';
import LogoutButton from '../../Componentes/LogoutButton';

/* Si se desea agregar un link, es necesario también crear su ruta en el archivo ./Routing/index.js */
/* Contendra todos los links que seran accesibles sin autentificacion */
const publicLinks = [
  { label: 'Home', to: '/', icon: <Reactjs color="accent-2" /> },
];

/* Contendra todos los links que necesitan que el usuario inicie sesion*/
const privateLinks = [
  { label: 'Workers', to: '/workers', icon: <Group color="accent-2" /> },
  { label: 'Medical Certificates', to: '/medcertificates', icon: <DocumentStore color="accent-2" /> },
  { label: 'Profile', to: '/profile', icon: <DocumentStore color="accent-2" /> },
];

function PageHeader(props) {
  const {isAuthenticated, isLoading} = useAuth0()

  const location = useLocation();

  /* Mientras la pagina este cargando, no recornada nada */
  if(isLoading){
    return null;
  }


  let links = [...publicLinks];//Agregamos los links publicos

  if(isAuthenticated){//Solo si el usuario esta autenticado, agregamos los links privados
    links = [...publicLinks, ...privateLinks];
  }

  return (//Recorre cada uno de los links que se han anexado
    <Header background="brand" pad="medium">
      <Nav direction="row">
        {links.map((link) => {
          return (
            <Link to={link.to} key={link.to}>
              {link.icon}
              {` `}
              <Text
                color={link.to === location.pathname ? 'accent-2' : 'accent-3'}
              >
                {link.label}
              </Text>
            </Link>
          );
        })}
      </Nav>

      <Box justify="end">
        <Select
          value={props.theme}
          options={Object.keys(themes)}
          onChange={({ option }) => props.setNewTheme(option)}
        />
      </Box>

      <Box justify="end">
        <LoginButton/>
        <LogoutButton/>
      </Box>
    </Header>
  );
  //Los componentes "LoginButton" y "LogoutButton" se muestran dependiendo de si el usuario esta autenticado o no
}

const mapStateToProps = (state) => ({
  theme: state.main.theme,
});

const mapDispatchToProps = {
  setNewTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(PageHeader);
