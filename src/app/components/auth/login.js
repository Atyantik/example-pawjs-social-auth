import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes, { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import Layout from '../layout';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

class Login extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired,
    history: PropTypes.shape({}),
  };

  static defaultProps = {
    history: {},
  };

  constructor(props) {
    super(props);
    this.state = {
      errMsg: '',
    };
  }


  doLogin(res, provider) {
    const { cookies, history } = this.props;
    if (provider === 'google') {
      cookies.set('token', res.accessToken, {
        expires: new Date(res.getAuthResponse().expires_at),
      });
      cookies.set('provider', provider, {
        expires: new Date(res.getAuthResponse().expires_at),
      });
    } else {
      cookies.set('token', res.accessToken, {
        expires: new Date(res.data_access_expiration_time.expires_at),
      });
      cookies.set('provider', provider, {
        expires: new Date(res.data_access_expiration_time.expires_at),
      });
    }
    history.push('/user/dashboard');
  }

  showErr(err) {
    console.log(err);
    this.setState({
      errMsg: `Error: ${err.error}`,
    });
  }

  render() {
    const {
      errMsg,
    } = this.state;
    const { loadedData } = this.props;
    if (loadedData.isTokenValid) {
      return <Redirect to="/user/dashboard" />;
    }
    return (
      <Layout>
        <section className="hero is-fullheight is-info is-medium is-bold">
          <div className="hero-body">
            <div className="container">
              <div className="columns is-vcentered">
                <div className="column is-6 is-offset-3">
                  <h1 className="title has-text-centered">
                    Login
                  </h1>
                  <div className="box is-centered buttons">
                    <GoogleLogin
                      clientId="997704440036-tt650bdkn8jela804u7jfd8ocbeu8a6c.apps.googleusercontent.com"
                      onSuccess={res => this.doLogin(res, 'google')}
                      onFailure={err => this.showErr(err)}
                      className="is-rounded is-danger button is-medium"
                    >
                      <i className="fab fa-google-plus" />
                      &nbsp;Continue with Google
                    </GoogleLogin>
                    <FacebookLogin
                      appId="136557516937157"
                      fields="name,email,picture"
                      // onClick={componentClicked}
                      callback={res => this.doLogin(res, 'fb')}
                      render={renderProps => (
                        <button
                          type="button"
                          className="button is-info is-rounded is-medium"
                          onClick={renderProps.onClick}
                        >
                          <i className="fab fa-facebook" />
                          &nbsp;Continue with Facebook
                        </button>
                      )}
                    />
                    {
                      errMsg !== '' && (
                        <p className="help is-danger">
                          {errMsg}
                        </p>
                      )
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
export default withCookies(Login);
