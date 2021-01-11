import { Box, Button, DateInput, Form, FormField, TextInput } from 'grommet';
/*import { Clock, Money } from 'grommet-icons';*/
import React from 'react';

function FormLayout({ onSubmit, currentValues }) {
  const defaultValues = {
    ...currentValues,
  };

  const [value, setValue] = React.useState(defaultValues);

  return (
    <Form
      value={value}
      onChange={(nextValue, { touched }) => {
        console.log('Change', nextValue, touched);
        setValue(nextValue);
      }}
      onReset={() => setValue(defaultValues)}
      onSubmit={(event) => {
        console.log('Submit', event.value, event.touched);
        onSubmit(event.value);
      }}
    >
      <FormField label="ID Number" name="idEmployee">
        <TextInput name="idEmployee" />
      </FormField>

      <FormField label="Full Name" name="fullNameEmployee">
        <TextInput name="fullNameEmployee" />
      </FormField>

      <FormField label="Job Title" name="jobTitleEmployee">
        <TextInput name="jobTitleEmployee" />
      </FormField>

      <FormField label="National ID Number" name="nationalIdNumber">
        <TextInput name="nationalIdNumber" />
      </FormField>

      <FormField label="Hire date" name="hireDateEmployee">
        <DateInput name="hireDateEmployee" format="yyyy-mm-dd" />
      </FormField>

      <Box direction="row" justify="between" margin={{ top: 'medium' }}>
        <Button label="Cancel" />
        <Button type="reset" label="Reset" />
        <Button type="submit" label="Submit" primary />
      </Box>
    </Form>
  );
}

export default FormLayout;
