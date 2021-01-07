import { Box } from 'grommet';
import React from 'react';
import MoviesProvider from './Context';
import Form from './Form';
import List from './List';

function Workers() {
  return (
    <MoviesProvider>
      <Box direction="row" pad="medium" gap="medium">
        <List />
        <Form />
      </Box>
    </MoviesProvider>
  );
}

export default Workers;
