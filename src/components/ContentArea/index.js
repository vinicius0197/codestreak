import React from 'react';
import {
  Container,
  ContentBackground
} from './styles';
import ProjectsTab from '../ProjectsTab/';

const ContentArea = props => {
  console.log(props);
  return(
    <React.Fragment>
      <ProjectsTab />
      <Container>
        <ContentBackground>
          { props.example }
        </ContentBackground>
      </Container>
    </React.Fragment>
  );
};

export default ContentArea;