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
    this.removeCookies();
  }

  removeCookies() {
    const { cookies } = this.props;
    cookies.remove('token');
    cookies.remove('provider');
    // eslint-disable-next-line
    console.log("here");
  }

  render() {
    const { staticContext } = this.props;
    if (staticContext) {
      staticContext.status = 302;
    }
    return <Redirect to="/" />;
  }
}
export default withCookies(Logout);
