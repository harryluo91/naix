import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { Link } from "react-router-dom";
import { Grid } from 'material-ui';
import { Form, Field, Text } from 'react-form';
import { TextField } from 'material-ui';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';

const validate = value => ({
  error: !value ? 'Field cannot be empty' : null
})

const CustomText = props => (

  // Use the form field and your custom input together to create your very own input!
  <Field validate={validate} field={props.field}>
    { fieldApi => {

      // Remember to pull off everything you dont want ending up on the <input>
      // thats why we pull off onChange, onBlur, and field
      // Note, the ...rest is important because it allows you to pass any
      // additional fields to the internal <input>.
      const { onChange, onBlur, field, ...rest } = props

      const { value, error, warning, success, setValue, setTouched } = fieldApi

      return (
        <FormControl className="form-field" error={ !!error }>
          <InputLabel htmlFor="username">Username</InputLabel>
          <Input
            {...rest}
            value={value || ''}
            onChange={e => {
              setValue(e.target.value)
              if (onChange) {
                onChange(e.target.value, e)
              }
            }}
            onBlur={e => {
              setTouched()
              if (onBlur) {
                onBlur(e)
              }
            }}
          />
          {error && <FormHelperText id="name-error-text">{error}</FormHelperText>}
        </FormControl>
      )
    }}
  </Field>
)

class LoginContainer extends Component {
  constructor() {
    super();
    autoBind(this);
    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange(event) {
    this.setState({ username: event.target.value });
  }

  handleSubmit(submittedValues) {
    console.log(submittedValues);
  }

  render() {
    return (
      <div className="login-container">
        <div className="login-form">
          <Form onSubmit={ this.handleSubmit }>
            {
              formApi => (
                <form onSubmit={ formApi.submitForm } id="form1" className="mb-4">
                  <CustomText field="username" id="username" />
                  {/* <label htmlFor="hello">Hello World</label>
                  <Text field="hello" id="hello" validate={validate} /> */}
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              )
            }
          </Form>
        </div>
      </div>
    );
  }
}

export default LoginContainer;
