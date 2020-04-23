import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProjects, selectProject } from 'actions';

import { Link, useRouteMatch } from "react-router-dom";

import {
  ProjectsBackground,
  ProjectItemContainer,
  ProjectBullet,
  ProjectItem,
  NewProjectButton,
  SelectedProjectContainer
} from './styles';

const ProjectsTab = props => {
  let { url } = useRouteMatch();

  useEffect(() => {
    props.fetchProjects();
  }, []);

  const handleSelectProject = (id) => {
    props.selectProject(id);
  };

  const renderProjects = () => {
    if(props.projects.projectList.length > 0) {
      return(
        props.projects.projectList.map(project => {
          const isSelected = project.hash === props.selectedProject;
          return(
            <Link key={project.projectName} to={`${url}/${project.hash}`} onClick={() => handleSelectProject(project.hash)}>
            { isSelected ?
              <SelectedProjectContainer>
                <ProjectBullet selected />
                <ProjectItem selected data-testid="project-item">{project.projectName}</ProjectItem>
              </SelectedProjectContainer>
              :
              <ProjectItemContainer>
                <ProjectBullet />
                <ProjectItem data-testid="project-item">{project.projectName}</ProjectItem>
              </ProjectItemContainer>
            }
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
    projects: state.projects,
    selectedProject: state.projects.selectedProject
  }
};

export default connect(mapStateToProps, { fetchProjects, selectProject })(ProjectsTab);