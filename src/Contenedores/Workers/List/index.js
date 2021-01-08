import { Box, Button, Text } from 'grommet';
import { AddCircle, Refresh, StatusCritical } from 'grommet-icons';
import React, { useContext } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { log } from '../../../utils';
import { WorkersContext } from '../Context';
import { getEntries } from '../sdk/deliveryAPI';
import { deleteEntry } from '../sdk/managementAPI';
import Table from './Table';

function List() {
  const {
    current: [, setCurrent],
  } = useContext(WorkersContext);

  const { data, isFetching, error, isLoading } = useQuery(
    'fetchWorkers',
    function () {
      return getEntries();
    }
  );

  const queryClient = useQueryClient();

  const deleteMutation = useMutation(
    function (id) {
      return deleteEntry(id);
    },
    {
      onSuccess: function () {
        log('info', 'Action performed successfully');
        queryClient.invalidateQueries('fetchWorkers');
      },
      onError: function (err) {
        console.error(err);
      },
      onSettled: function () {},
    }
  );

  const deleteWorker = (id) => {
    deleteMutation.mutate(id);
  };

  const setCurrentWorker = (worker) => {
    setCurrent(worker);
  };

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

      <Box direction="row" gap="medium" justify="end">
        <Button
          type="button"
          onClick={() => setCurrent({})}
          label="Add"
          icon={<AddCircle color="brand" />}
          color="accent-1"
        />
      </Box>

      <Table
        workers={data}
        setCurrent={setCurrentWorker}
        deleteWorker={deleteWorker}
      />
    </Box>
  );
}

export default List;