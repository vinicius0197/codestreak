import React from 'react';
import {
  Container,
  ContentBackground,
  ProjectArea
} from './styles';
import ProjectsTab from '../ProjectsTab/';
import Posts from '../Posts/';
import CalendarView from '../CalendarView/';

const ContentArea = props => {
  console.log(props);
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
    </React.Fragment>
  );
};

export default ContentArea;