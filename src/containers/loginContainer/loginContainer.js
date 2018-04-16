import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { Link } from "react-router-dom";
import { Grid, Paper, Button } from 'material-ui';
import { Form } from 'react-form';
import TextInput from '../../components/form/textInput';

class LoginContainer extends Component {
  constructor() {
    super();
    autoBind(this);
    this.state = {
      username: '',
      password: ''
    }
  }

  // handleChange(event) {
  //   this.setState({ username: event.target.value });
  // }

  handleSubmit(submittedValues) {
    console.log(submittedValues);
  }

  render() {
    return (
      <div className="login-container">
        <div className="login-container__login-form">
          <Grid container xs={12} justify="center">
            <Grid item xs={6}>
            <Paper>
              <Form onSubmit={ this.handleSubmit }>
                {
                  formApi => (
                    <form onSubmit={ formApi.submitForm } id="form1" className="mb-4">
                      <Grid container spacing={16} alignItems="center" direction="column">
                        <Grid item xs={12}>
                          <TextInput
                            field="username"
                            id="username"
                            displayName="Username"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextInput
                            field="password"
                            id="password"
                            displayName="Password"
                            type="password"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Button type="submit" className="btn btn-primary" variant="raised" color="primary">
                            Submit
                          </Button>
                        </Grid>
                      </Grid>             
                    </form>
                  )
                }
              </Form>
            </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default LoginContainer;
