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
    <Router history={history}>
      <Switch>
        <Route path="/">
          <Layout>
            <Sidebar />
            <ProjectsTab />
            <Navbar />
            <ContentArea />
          </Layout>
        </Route>
      </Switch>
    </Router>

  );
};

export default App;