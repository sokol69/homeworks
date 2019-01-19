import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
import LoginForm from '../LoginForm';
import { AuthProvider } from '../../context/Auth';
import { DataProvider } from '../../context/Data';

class RootRouter extends Component {
  render() {
    return (
      <DataProvider>
        <AuthProvider>
          <BrowserRouter>
            <Switch>
              <Route path="/login" component={LoginForm} />
              <Route path="/app" component={PrivateRoute} />
              <Redirect to="/login" />
            </Switch>
          </BrowserRouter>
        </AuthProvider>
      </DataProvider>
    );
  };
};

export default RootRouter;
