import { Box, Text } from 'grommet';
import { StatusCritical, StatusGood } from 'grommet-icons';
import React, { useContext } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { log } from '../../../utils';
import { WorkersContext } from '../Context';
import { createEntry, updateEntry } from '../sdk/managementAPI';
import FormLayout from './FormLayout';

function Form() {
  const {
    current: [current],
  } = useContext(WorkersContext);

  const queryClient = useQueryClient();

  const mutation = useMutation(

   function ({ data, idEmployee }) {
    if (!idEmployee) {
      return createEntry(data);
    } else {
      return updateEntry(idEmployee, data);
    }
  },

    {
      onSuccess: function () {
        log('success', 'Action performed successfully');
        queryClient.invalidateQueries('fetchWorkers');
      },
      onError: function (err) {
        console.error(err);
      },
      onSettled: function () {},
    }
  );

  const isAddMode = !current.id;

  const onSubmit = (values) => {
    console.log('values submitted', values);

    const payload = {
      //casting de objetos text que en el backend son int
     ...values,
     idEmployee: parseInt(values.idEmployee, 10),
    };
    delete payload.createdAt;
    delete payload.updatedAt;
    //ancla: estos valores debo modificarlos para la funcion oneToMany
    delete payload.poster;
    delete payload.cast;
    delete payload.id;

    console.log({ values, payload });

    if (isAddMode) {
      mutation.mutate({ data: payload });
    } else {
      mutation.mutate({ data: payload, idEmployee: current.id});
    }
  };

  return (
    <Box pad="medium" elevation="medium" gap="small" width="large">
      {mutation.isSuccess && (
        <Box direction="row" gap="medium">
          <Text color="brand">
            Worker created successfully... <StatusGood color="brand" />
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

      <FormLayout
        onSubmit={onSubmit}
        currentValues={current}
        key={current.id}
      />
    </Box>
  );
}

export default Form;
