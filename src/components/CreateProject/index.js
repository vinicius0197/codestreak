import React from 'react';

import Modal from '../shared/Modal';

import { Link } from 'react-router-dom';

const CreateProject = () => {
  return(
    <Modal modalName="Create Project">
      <div>Create new project</div>

      <label for="projectName">Project Name</label>
      <input name="projectName" data-testid="projectName" />

      <label for="projectDescription">Project projectDescription</label>
      <input name="projectDescription" data-testid="projectDescription" />

      <Link to="/home">
        <button data-testid="finishButton">Finish</button>
      </Link>
    </Modal>
  );
};

export default CreateProject;