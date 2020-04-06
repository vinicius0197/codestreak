import React from 'react';
import {
  Container,
  ContentBackground,
  ProjectArea
} from './styles';
import ProjectsTab from 'components/ProjectsTab';
import Posts from 'components/Posts';
import CalendarView from 'components/CalendarView';
import CreateProject from 'components/CreateProject';

import {Route} from 'react-router-dom';

const ContentArea = props => {
  return(
    <React.Fragment>
      <ProjectsTab />
      <Container>
        <ContentBackground>
          <ProjectArea>
            <Posts />
            <CalendarView />
          </ProjectArea>
        </ContentBackground>
      </Container>
      <Route path="/home/newproject" exact component={CreateProject} />
    </React.Fragment>
  );
};

export default ContentArea;