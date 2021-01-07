import { Box, Text } from 'grommet';
import { Refresh, StatusCritical } from 'grommet-icons';
import React from 'react';
import { useQuery } from 'react-query';
import ListGrommet from '../../APIFetching/List/ListGrommet';
import { getEntries } from '../sdk';

function List() {
  const { data, isFetching, error, isLoading, status } = useQuery(
    'contentfulfetchWorkers',
    function () {
      return getEntries();
    }
  );

  if (isLoading) {
    return (
      <Box direction="row" gap="medium">
        <Text color="accent-1">
          Loading... <Refresh color="accent-1" />
        </Text>
      </Box>
    );
  }

  if (error) {
    return (
      <Box direction="row" gap="medium">
        <Text color="accent-2">
          An error has occurred... <StatusCritical color="accent-2" />
        </Text>
      </Box>
    );
  }

  return (
    <Box pad="medium" elevation="medium" fill gap="small">
      {isFetching && (
        <Box direction="row" gap="medium">
          <Text color="accent-2">
            Fetching data... <Refresh color="accent-2" />
          </Text>
        </Box>
      )}

      <ListGrommet users={data} />
    </Box>
  );
}

export default List;
