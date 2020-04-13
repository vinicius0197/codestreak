// import axios from 'axios';
import api from 'apis';

import { FETCH_PROJECTS, ADD_PROJECT } from 'actions/types';

export const fetchProjects = () => async dispatch => {
  const response = await api.get('/projects');
  dispatch({ type: FETCH_PROJECTS, payload: response.data });
};

export const addProject = (formValues) => async dispatch => {
  const response = await api.post('/projects', formValues);
  dispatch({ type: ADD_PROJECT, payload: response.data });
};