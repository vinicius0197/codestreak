import axios from 'axios';

import { FETCH_PROJECTS } from 'actions/types';

export const fetchProjects = () => async dispatch => {
  const response = await axios.get('http:localhost:3001/projects');
  dispatch({ type: FETCH_PROJECTS, payload: response.data });
}