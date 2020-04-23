import React from 'react';
import { connect } from 'react-redux';

import Modal from '../shared/Modal';
import ProjectForm from 'components/CreateProject/ProjectForm';
import { addProject } from 'actions';

const HASHLENGTH = 25;

const CreateProject = props => {
  const onSubmit = formValues => {
    const hash = generateRandomHash();
    props.addProject({...formValues, hash });
  };

  // TODO: this function is for tests only. Hashes should be generated in the back-end
  const generateRandomHash = () => {
    const characters = "0123456789ABCDEFGHIJKLMNPQRSTUVWXYZabcdefghijklmnopqrstuvxz";
    let string = "";
    for (let i = 0; i <= HASHLENGTH; i++) {
      string += characters[Math.floor(Math.random() * characters.length)];
    }
    return string;
  };

  return(
    <Modal modalName="Create Project">
      <div>Create new project</div>
      <ProjectForm onSubmit={onSubmit} />
    </Modal>
  );
};

export default connect(null, { addProject })(CreateProject);