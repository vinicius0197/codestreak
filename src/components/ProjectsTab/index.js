import React from 'react';

import { Link, useRouteMatch } from "react-router-dom";

import {
  ProjectsBackground,
  ProjectItemContainer,
  ProjectBullet,
  ProjectItem,
  NewProjectButton
} from './styles';

const ProjectsTab = ({ match }) => {
  let { path, url } = useRouteMatch();
  return(
    <ProjectsBackground>
      <div>
        <Link to={`${url}/projeto1`}>
          <ProjectItemContainer>
            <ProjectBullet />
            <ProjectItem>Projeto 1</ProjectItem>
          </ProjectItemContainer>
        </Link>

        <ProjectItemContainer>
          <ProjectBullet />
          <ProjectItem>Projeto 2</ProjectItem>
        </ProjectItemContainer>

        <ProjectItemContainer>
          <ProjectBullet />
          <ProjectItem>Projeto 3</ProjectItem>
        </ProjectItemContainer>
      </div>

      <NewProjectButton> New Project </NewProjectButton>
    </ProjectsBackground>
  );
};

export default ProjectsTab;