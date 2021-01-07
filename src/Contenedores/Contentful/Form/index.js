import Axios from 'axios';
import { Box, Text } from 'grommet';
import { StatusCritical, StatusGood } from 'grommet-icons';
import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { gorestToken, log } from '../../../utils';
import FormLayout from '../../APIFetching/Form/FormGrommet';

function Form() {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    function (data, isAdding) {
      // if (isAdding) {
      return createEntry(data);
      // } else {
      //   return updateEntry(data);
      // }
    },
    {
      onSuccess: function () {
        log('success', 'User created successfully');
        queryClient.invalidateQueries('contentfulfetchWorkers');
      },
      onError: function (err) {
        console.error(err);
      },
      onSettled: function () {},
    }
  );

  const onSubmit = (values) => {
    console.log('values submitted', values);

    const payload = {
      ...values,
      status: values.status ? 'Active' : 'Inactive',
    };

    mutation.mutate(payload);
  };

  return (
    <Box pad="medium" elevation="medium" gap="small" width="large">
      {mutation.isSuccess && (
        <Box direction="row" gap="medium">
          <Text color="brand">
            User created successfully... <StatusGood color="brand" />
          </Text>
        </Box>
      )}

      {mutation.isError && (
        <Box direction="row" gap="medium">
          <Text color="accent-1">
            An error has occurred... <StatusCritical color="accent-1" />
          </Text>
        </Box>
      )}

      <FormLayout onSubmit={onSubmit} currentValues={{}} />
    </Box>
  );
}

export default Form;
