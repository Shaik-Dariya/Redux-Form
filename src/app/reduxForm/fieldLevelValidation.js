import React from 'react';
import { reduxForm, Field } from 'redux-form';

const required = value => (value ? undefined : 'Required');
const maxLength = max => value => (value.length > max ? `Must be within ${max} length`: undefined);
const maxLength15 = maxLength(15);
const minLength2 = value => value.length < 2 ? `Must be min lenght 2`: undefined;
const alphaNumeric = value => !isNaN(value) ? 'Should be only alphabets.' : undefined;

const renderInputField = ({
    input,
    label,
    type,
    meta: { touched, error, warning}
}) =>(
<div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
</div>
)

const FieldLevelValidate = props => (
     <form>
        <Field type="text" component ={renderInputField} name="uniqueName"  label="UniqueName" validate={[required, maxLength15, minLength2]} warn={alphaNumeric}/>
     </form>
);


export default reduxForm({
    form: 'fieldLevelValidation'
})(FieldLevelValidate);
