import React from 'react';
import { Box, Button, DataTable, Text } from 'grommet';
import { Actions, FormClose, FormEdit } from 'grommet-icons';
import { DateTime } from 'luxon';

function Table({ medcerts, setCurrent, deleteMedcert }) {
  return (
    <DataTable
    columns={[
      { property: 'idMedCert', primary: true, header: <Text>Id</Text> },
      { property: 'medicalService', header: <Text>Medical Service</Text> },
      { property: 'mdName', header: <Text>Doctor full name</Text> },
      { property: 'daysOffMedCert', header: <Text>Days Off</Text> },
      {
        property: 'endDateMedCert',
        header: <Text>Last Date Off</Text>,
        render: (row) => {
          return DateTime.fromISO(row.endDateMedCert).toLocaleString(
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
                onClick={() => deleteMedcert(row.id)}
                icon={<FormClose color="accent-2" />}
                plain
              />
            </Box>
          );
        },
      },
    ]}
    data={medcerts}
    />
  );
}

export default Table;
