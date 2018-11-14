import React from 'react';
import './resources/css/styles.scss';
import { CookiesProvider, Cookies } from 'react-cookie';

export default class Client {
  constructor() {
    this.cookie = new Cookies(document.cookie);
  }

  trackPageView() {
    const { ga } = window;
    if (typeof ga !== 'undefined' && ga) {
      ga('send', {
        hitType: 'pageview',
        page: window.location.pathname,
      });
    }
  }

  apply(clientHandler) {
    clientHandler.hooks.beforeRender.tapPromise('WrapCookieProvider', async (app) => {
      // eslint-disable-next-line
      app.children = (
        <CookiesProvider cookies={this.cookie}>
          {app.children}
        </CookiesProvider>
      );
    });
    clientHandler.hooks.renderComplete.tap('InitTracking', () => {
      window.ga = window.ga || function () {
        (window.ga.q = window.ga.q || []).push(arguments);
      };
      window.ga.l = +new Date;
      window.ga('create', 'UA-108804791-1', 'auto');
      window.ga('send', 'pageview', window.location.pathname);
    });
    clientHandler.hooks.locationChange.tapPromise('ReInitAds', async () => {
      this.trackPageView();
    });
  }
}
