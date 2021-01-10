import { Box } from 'grommet';
import React from 'react';
import MedcertsProvider from './Context';
import Form from './Form';

function Medcerts() {
  return (
    <MedcertsProvider>
      <Box direction="row" pad="medium" gap="medium">
        <Form />
      </Box>
    </MedcertsProvider>
  );
}

export default Medcerts;
