// import axios from 'axios';
import api from 'apis';

import { FETCH_PROJECTS, ADD_PROJECT, SELECT_PROJECT, FETCH_POSTS, ADD_POST } from 'actions/types';

export const fetchProjects = () => async dispatch => {
  const response = await api.get('/projects');
  dispatch({ type: FETCH_PROJECTS, payload: response.data });
};

export const addProject = (formValues) => async dispatch => {
  const response = await api.post('/projects', formValues);
  dispatch({ type: ADD_PROJECT, payload: response.data });
};

export const selectProject = id => {
  return {
    type: SELECT_PROJECT,
    payload: id
  }
};

export const fetchPosts = projectId => async dispatch => {
  const response = await api.get(`/projects/${projectId}?_embed=posts`);
  dispatch({ type: FETCH_POSTS, payload: response.data });
};

export const addPost = postData => async dispatch => {
  const response = await api.post('/posts', postData);
  dispatch({ type: ADD_POST, payload: response.data });
};