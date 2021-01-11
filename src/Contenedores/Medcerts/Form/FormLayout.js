import { Box, Button, DateInput, Form, FormField, TextInput } from 'grommet';
/*import { Clock, Money } from 'grommet-icons';*/
import React from 'react';
import { useParams } from 'react-router-dom';

function FormLayout({ onSubmit, currentValues }) {
  const defaultValues = {
    ...currentValues,
  };
  const [value, setValue] = React.useState(defaultValues);

  const { idEmp, fnEmp }  =  useParams();
  //console.log("idEmp: " + idEmp);

  return (
    <Form
      value={value}
      onChange={(nextValue, { touched }) => {
        console.log('Change', nextValue, touched);
        setValue(nextValue);
      }}
      onReset={() => setValue(defaultValues)}
      onSubmit={(event) => {
        event.value.idEmployee = idEmp;
        console.log('Submit', event.value, event.touched);
        onSubmit(event.value);
      }}
    >
      <div>
        <p>Employee ID: <b><i>{ idEmp }</i></b>
        , Full name: <b><i>{ fnEmp }</i></b></p>
      </div>

      <FormField label="Internal ID" name="idMedCert">
        <TextInput name="idMedCert" />
      </FormField>

      <FormField label="Medical Service" name="medicalService">
        <TextInput name="medicalService" />
      </FormField>

      <FormField label="Doctor's Name" name="mdName">
        <TextInput name="mdName" />
      </FormField>

      <FormField label="Days Off" name="daysOffMedCert">
        <TextInput name="daysOffMedCert" />
      </FormField>

      <FormField label="MedCert's Start Date" name="startDateMedCert">
        <DateInput name="startDateMedCert" format="yyyy-mm-dd" />
      </FormField>

      <FormField label="MedCert's End Date" name="endDateMedCert">
        <DateInput name="endDateMedCert" format="yyyy-mm-dd" />
      </FormField>
      
      <FormField label="Date of Register" name="recordedDateMedCert">
        <DateInput name="recordedDateMedCert" format="yyyy-mm-dd" />
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
