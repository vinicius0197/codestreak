import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import styled from 'styled-components';
import './App.css';
import Sidebar from './Sidebar/';
import Navbar from './Navbar/';
import ProjectsTab from './ProjectsTab/';
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
        <ProjectsTab />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <ContentArea example="hello" />
          </Route>

          <Route path="/statistics">
            <ContentArea example="statistics" />
          </Route>
        </Switch>
      </Router>
    </Layout>
  );
};

export default App;