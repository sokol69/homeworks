import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import { Route, Redirect } from 'react-router-dom';
import classes from './LoginForm.module.css';

class LoginForm extends Component {
  state = {
    values: {
      email: '',
      password: ''
    }
  };

  render() {
    const { isAuthorized, authorize, authError } = this.props;
    return (
      <Route>
        {isAuthorized ? (
          <Redirect to="/app" />
        ) : (
          <div className={classes.bg}>
            <div className={classes.form + ' t-form'}>
              <p>
                <label htmlFor="email">
                  <span className={classes.labelText}>Почта</span>
                </label>
                <input
                  type="text"
                  name="email"
                  className={classes.input + ' t-input-email'}
                  onChange={this.handleChange}
                />
              </p>
              <p>
                <label htmlFor="password">
                  <span className={classes.labelText}>Пароль</span>
                </label>
                <input
                  type="password"
                  name="password"
                  className={classes.input + ' t-input-password'}
                  onChange={this.handleChange}
                />
              </p>
              {authError ? <p className={classes.error}>{authError}</p> : null}
              <div className={classes.buttons}>
                <button
                  className={classes.button + ' t-login'}
                  onClick={() =>
                    authorize(
                      this.state.values.email,
                      this.state.values.password
                    )
                  }
                >
                  Войти
                </button>
              </div>
            </div>
          </div>
        )}
      </Route>
    );
  };

  handleChange = event => {
    const { values } = this.state;
    this.setState({
      values: { ...values, [event.target.name]: event.target.value }
    });
  };
};

export default withAuth(LoginForm);
