import React from 'react';
import { Box, Header, Nav, Select, Text } from 'grommet';
import { DocumentStore, GraphQl, Group, Reactjs, Tools } from 'grommet-icons';
import { Link, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { setNewTheme } from '../../redux/actions';
import { themes } from '../../utils';

const links = [
  {/* label: 'Example', to: '/', icon: <Reactjs color="accent-2" /> },
  { label: 'JSX', to: '/jsx', icon: <Reactjs color="accent-2" /> },
  { label: 'Lifecycle', to: '/lifecycle', icon: <Reactjs color="accent-2" /> },
  { label: 'Users', to: '/users', icon: <Group color="accent-2" /> },
  { label: 'Fetch Data', to: '/api', icon: <DocumentStore color="accent-2" /> },
  { label: 'Redux Toolkit', to: '/toolkit', icon: <Tools color="accent-2" /> },
  { label: 'React Query', to: '/rquery', icon: <GraphQl color="accent-2" /> },*/

   label: 'Employees', to: '/employees', icon: <Group color="accent-2" /> },
  { label: 'Medical Certificates', to: '/medcertificates', icon: <DocumentStore color="accent-2" /> },
  { label: 'Logout', to: '/toolkit', icon: <Tools color="accent-2" /> },
  { label: 'Prueba', to: '/apiffull', icon: <Reactjs color="accent-2" /> },
];


function PageHeader(props) {
  const location = useLocation();
  console.log({ location });
  console.log('props con redux', props);

  return (
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
    </Header>
  );
}

const mapStateToProps = (state) => ({
  theme: state.main.theme,
});

const mapDispatchToProps = {
  setNewTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(PageHeader);
