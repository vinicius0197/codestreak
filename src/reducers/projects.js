import { FETCH_PROJECTS, ADD_PROJECT, SELECT_PROJECT, FETCH_POSTS } from 'actions/types';

const initialState = {
  projectList: [],
  selectedProject: 1
};

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_PROJECTS:
      return { ...state, projectList: action.payload }
    case ADD_PROJECT:
      return { ...state, projectList: [...state.projectList, action.payload] }
    case SELECT_PROJECT:
      return { ...state, selectedProject: action.payload }
    case FETCH_POSTS:
      return { ...state, posts: action.payload.posts }
    default:
      return state;
  }
}