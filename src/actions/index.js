// import axios from 'axios';
import api from 'apis';

import { FETCH_PROJECTS } from 'actions/types';

export const fetchProjects = () => async dispatch => {
  const response = await api.get('/projects');
  dispatch({ type: FETCH_PROJECTS, payload: response.data });
}