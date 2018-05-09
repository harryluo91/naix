import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { Link } from "react-router-dom";
import { Grid, Paper, Button } from 'material-ui';
import { Form } from 'react-form';

import TextInput from '../../components/form/textInput';
import { storageManager, STORAGE_TYPES } from '../../utils/storageUtils';
import HomeBG from '../../static/home-bg.jpg';

class LoginContainer extends Component {
  constructor() {
    super();
    autoBind(this);
    this.state = {
      username: '',
      password: '',
      counter: 0
    }
  }

  handleSubmit(submittedValues) {
    const loggedInUserId = storageManager.createOrFetchStorage('userId', STORAGE_TYPES.session);
    const { history } = this.props;
    if (submittedValues.username === 'test' && submittedValues.password === 'test') {
      if (!loggedInUserId.get()) {
        loggedInUserId.set('test');
      }
      
      // setTimeout(() => {
      //   history.push('/app-select');
      // }, 1000)
      history.push('/app-select');
    }
  }

  

  render() {
    return (
      <div className="login-container" style={{backgroundImage: `url(${HomeBG})`}}>
        <div className="login-container__login-form">
          <Grid container justify="center">
            <Grid item xs={6}>
              <div className="login-container__form-container--blur-filter"></div>
              <div className="login-container__form-container">test</div>
              {/* <Paper>
                <div className="login-container__form-container">
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
                </div>
              </Paper> */}
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default LoginContainer;
