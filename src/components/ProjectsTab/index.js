import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProjects } from 'actions';

import { Link, useRouteMatch } from "react-router-dom";

import {
  ProjectsBackground,
  ProjectItemContainer,
  ProjectBullet,
  ProjectItem,
  NewProjectButton
} from './styles';

const ProjectsTab = props => {
  let { url } = useRouteMatch();

  useEffect(() => {
    props.fetchProjects();
  }, []);

  const renderProjects = () => {
    if(props.projects.projects.length > 0) {
      return(
        props.projects.projects.map(project => {
          return(
            <Link key={project.projectName} to={`${url}/projeto1`}>
            <ProjectItemContainer>
              <ProjectBullet />
              <ProjectItem data-testid="project-item">{project.projectName}</ProjectItem>
            </ProjectItemContainer>
          </Link>
          );
        })
      );
    } else {
      return <div>Loading ...</div>;
    }
  };
  return(
    <ProjectsBackground>
      <div data-testid="projectList">
        { renderProjects() }
      </div>

      <Link to={'/home/newproject'}>
        <NewProjectButton data-testid="createProjectButton"> New Project </NewProjectButton>
      </Link>
    </ProjectsBackground>
  );
};

const mapStateToProps = state => {
  return {
    projects: state.projects
  }
};

export default connect(mapStateToProps, { fetchProjects })(ProjectsTab);