import { Box, Text } from 'grommet';
import { StatusCritical, StatusGood } from 'grommet-icons';
import React, { useContext } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { log } from '../../../utils';
import { MedcertsContext } from '../Context';
import { createEntry, updateEntry } from '../sdk/managementAPI';
import FormLayout from './FormLayout';
import { useHistory } from 'react-router-dom';

function Form() {
  const viewMedcert = useHistory();
  const {
    current: [current],
  } = useContext(MedcertsContext);

  const queryClient = useQueryClient();

  const mutation = useMutation(

   function ({ data, idMedcert }) {
    if (!idMedcert) {
      return createEntry(data);
    } else {
      return updateEntry(idMedcert, data);
    }
  },

    {
      onSuccess: function () {
        log('success', 'Action performed successfully');
        queryClient.invalidateQueries('fetchMedcerts');
        viewMedcert.push(`/vermedcerts/`);
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
     idMedCert: parseInt(values.idMedCert, 10),
     daysOffMedCert: parseInt(values.daysOffMedCert, 10),
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
      mutation.mutate({ data: payload, idMedCert: current.id});
    }
  };

  return (
    <Box pad="medium" elevation="medium" gap="small" width="large">
      {mutation.isSuccess && (
        <Box direction="row" gap="medium">
          <Text color="brand">
            Med Certificate created successfully... <StatusGood color="brand" />
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
