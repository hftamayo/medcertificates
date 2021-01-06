import {
  Box,
  Button,
  CheckBox,
  Form,
  FormField,
  MaskedInput,
  RadioButtonGroup,
  TextInput,
} from 'grommet';
import { MailOption } from 'grommet-icons';
import React from 'react';

function FormLayout({ onSubmit, currentValues }) {
  const defaultValues = {
    ...currentValues,
    status: currentValues.status === 'Active',
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
      <FormField label="Name" name="name">
        <TextInput name="name" />
      </FormField>

      <FormField label="Email" name="email" required>
        <MaskedInput
          name="email"
          mask={[
            { regexp: /^[\w\-_.]+$/, placeholder: 'example' },
            { fixed: '@' },
            { regexp: /^[\w]+$/, placeholder: 'my' },
            { fixed: '.' },
            { regexp: /^[\w]+$/, placeholder: 'com' },
          ]}
          icon={<MailOption />}
        />
      </FormField>

      <FormField name="gender">
        <RadioButtonGroup name="gender" options={['Male', 'Female']} />
      </FormField>

      <FormField name="status">
        <CheckBox name="status" label="Active?" />
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
