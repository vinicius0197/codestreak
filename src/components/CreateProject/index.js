import React from 'react';
import { connect } from 'react-redux';

import Modal from '../shared/Modal';
import ProjectForm from 'components/CreateProject/ProjectForm';
import { addProject } from 'actions';


const CreateProject = props => {
  const onSubmit = formValues => {
    props.addProject(formValues);
  };

  return(
    <Modal modalName="Create Project">
      <div>Create new project</div>
      <ProjectForm onSubmit={onSubmit} />
    </Modal>
  );
};

export default connect(null, { addProject })(CreateProject);