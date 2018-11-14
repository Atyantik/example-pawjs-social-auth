import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

class Logout extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired,
  };

  constructor(props) {
    super(props);
    props.cookies.remove('token');
    props.cookies.remove('provider');
  }

  render() {
    return <Redirect to="/" />;
  }
}
export default withCookies(Logout);
