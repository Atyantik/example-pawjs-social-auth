import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { withCookies } from 'react-cookie';
import PropTypes from 'prop-types';
import fetch from 'universal-fetch';

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}

class Auth extends Component {
  static propTypes = {
    guestOnly: PropTypes.bool,
  };

  static defaultProps = {
    guestOnly: false,
  };

  state = {
    isTokenValid: true,
  };

  componentDidMount() {
    const { cookies, guestOnly } = this.props;
    if (guestOnly) return;
    if (cookies) {
      let isTokenValid = false;
      const provider = cookies.get('provider');
      const token = cookies.get('token');
      if (provider && provider === 'google') {
        fetch(`https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=${token}`)
          .then(res => handleResponse(res))
          .catch(() => {
            isTokenValid = false;
            cookies.remove('provider');
            cookies.remove('token');
            this.setState({
              isTokenValid,
            });
          });
      } else if (provider && provider === 'fb') {
        fetch(` https://graph.facebook.com/me?access_token=${token}`)
          .then(res => handleResponse(res))
          .catch(() => {
            isTokenValid = false;
            cookies.remove('provider');
            cookies.remove('token');
            this.setState({
              isTokenValid,
            });
          });
      }
    }
  }

  render() {
    const {
      cookies,
      guestOnly,
      route,
    } = this.props;
    const { isTokenValid } = this.state;
    const isUserValid = isTokenValid && cookies.get('provider') && cookies.get('token');
    if (!isUserValid && guestOnly) {
      return renderRoutes(route.routes);
    }

    if (isUserValid && !guestOnly) {
      return renderRoutes(route.routes);
    }

    if (isUserValid && guestOnly) {
      return <Redirect to="/user/dashboard" />;
    }

    return <Redirect to="/login" />;
  }
}
export default withCookies(Auth);
