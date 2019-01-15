import React, { PureComponent } from 'react';

const { Provider, Consumer: AuthConsumer } = React.createContext('');

class AuthProvider extends PureComponent {
  state = {
    isAuthorized: false,
    authorizeError: '',
    email: ''
  };

  render() {
    const { children } = this.props;
    return (
      <Provider
        value={{
          isAuthorized: this.state.isAuthorized,
          authorizeError: this.state.authorizeError,
          authorize: this.authorize,
          logout: this.logout,
          email: this.state.email
        }}
      >
        {children}
      </Provider>
    );
  };

  authorize = (emailValue, passwordVlaue) => {
    if (
      passwordVlaue === '123' &&
      (emailValue === 'stu@dent.com' || emailValue === 'test@test.ru')
    ) {
      this.setState({
        isAuthorized: true,
        authorizeError: '',
        email: emailValue
      });
    } else {
      this.setState({
        authorizeError: 'Email или пароль введён не верно'
      });
    }
  };

  logout = () => {
    this.setState({
      isAuthorized: false,
	  authorizeError: '',
	  email: ''
    });
  };

  getProviderValue = () => {
    return {
      isAuthorized: this.state.isAuthorized,
      email: this.state.email,
      authorizeError: this.state.authorizeError,
      authorize: this.authorize,
      logout: this.logout
    };
  };
};

const TestProvider = Provider;

export { AuthProvider, AuthConsumer, TestProvider };
