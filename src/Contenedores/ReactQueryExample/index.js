import { Box } from 'grommet';
import React from 'react';
import Form from './Form';
import List from './List';

function ReactQueryExample() {
  return (
    <Box direction="row" pad="medium" gap="medium">
      <List />
      <Form />
    </Box>
  );
}

export default ReactQueryExample;
