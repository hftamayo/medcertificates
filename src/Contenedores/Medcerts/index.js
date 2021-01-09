import { Box } from 'grommet';
import React from 'react';
import MedcertsProvider from './Context';
import Form from './Form';
import List from './List';

function Medcerts() {
  return (
    <MedcertsProvider>
      <Box direction="row" pad="medium" gap="medium">
        <List />
        <Form />
      </Box>
    </MedcertsProvider>
  );
}

export default Medcerts;
