import React from 'react';
import Header from './header';
import Footer from './footer';
// import Loader from 'loader';
export default () => [
  <Header key="header" />,
  <div key="loader">Loading... Please wait...</div>,
  // <Loader />,
  <Footer key="footer" />,
];
