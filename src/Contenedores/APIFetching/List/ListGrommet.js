import React from 'react';
import { Box, Button, DataTable, Text } from 'grommet';
import {
  Actions,
  FormClose,
  FormEdit,
  StatusCritical,
  StatusGood,
  User,
  UserFemale,
} from 'grommet-icons';

function ListGrommet({ users, setCurrent, deleteUser }) {
  return (
    <DataTable
      columns={[
        { property: 'id', primary: true, header: <Text>Id</Text> },
        { property: 'name', header: <Text>Name</Text> },
        { property: 'email', header: <Text>Email</Text> },
        {
          property: 'gender',
          header: <Text>Gender</Text>,
          render: (row) => {
            return row.gender === 'Male' ? (
              <User color="brand" />
            ) : (
              <UserFemale color="accent-2" />
            );
          },
        },
        {
          property: 'status',
          header: <Text>Status</Text>,
          render: (row) => {
            return row.status === 'Active' ? (
              <StatusGood color="brand" />
            ) : (
              <StatusCritical color="accent-1" />
            );
          },
        },
        {
          property: 'actions',
          header: <Actions />,
          render: (row) => {
            return (
              <Box direction="row">
                <Button
                  type="button"
                  onClick={() => setCurrent(row)}
                  icon={<FormEdit color="brand" />}
                  plain
                />
                <Button
                  type="button"
                  onClick={() => deleteUser(row.id)}
                  icon={<FormClose color="accent-2" />}
                  plain
                />
              </Box>
            );
          },
        },
      ]}
      data={users}
    />
  );
}

export default ListGrommet;
