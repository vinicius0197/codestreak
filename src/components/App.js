import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import styled from 'styled-components';
import './App.css';
import Sidebar from './Sidebar/';
import Navbar from './Navbar/';
import ContentArea from './ContentArea';

import history from '../history';

const Layout = styled.div`
  display: flex;
  height: 100vh;
`;

const App = () => {
  return(
    <Layout>
      <Router history={history}>
        <Sidebar />
        <Navbar />
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path="/home" component={ContentArea} />
          <Route path="/statistics" component={ContentArea} />
        </Switch>
      </Router>
    </Layout>
  );
};

export default App;