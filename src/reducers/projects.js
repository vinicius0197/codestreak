import { FETCH_PROJECTS, ADD_PROJECT, SELECT_PROJECT } from 'actions/types';

export default function(state = { projectList: [] }, action) {
  switch(action.type) {
    case FETCH_PROJECTS:
      return { ...state, projectList: action.payload }
    case ADD_PROJECT:
      return { ...state, projectList: [...state.projectList, action.payload] }
    case SELECT_PROJECT:
      return { ...state, selectedProject: action.payload }
    default:
      return state;
  }
}