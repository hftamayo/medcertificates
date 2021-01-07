import React from 'react';
import { Box, Button, DataTable, Text } from 'grommet';
import { Actions, FormClose, FormEdit } from 'grommet-icons';
import { DateTime } from 'luxon';

function Table({ movies, setCurrent, deleteMovie }) {
  return (
    <DataTable
    columns={[
      { property: 'idEmployee', primary: true, header: <Text>Id</Text> },
      { property: 'fullNameEmployee', header: <Text>Full name</Text> },
      { property: 'jobTitleEmployee', header: <Text>Job Title</Text> },
      { property: 'nationalIdNumber', header: <Text>Nat ID Number</Text> },
      {
        property: 'hireDateEmployee',
        header: <Text>Hire Date</Text>,
        render: (row) => {
          return DateTime.fromISO(row.releaseDate).toLocaleString(
            DateTime.DATE_FULL
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
                onClick={() => deleteMovie(row.id)}
                icon={<FormClose color="accent-2" />}
                plain
              />
            </Box>
          );
        },
      },
    ]}
    data={movies}
    />
  );
}

export default Table;
