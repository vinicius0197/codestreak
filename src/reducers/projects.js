import { FETCH_PROJECTS, ADD_PROJECT } from 'actions/types';

export default function(state = { projects: [] }, action) {
  switch(action.type) {
    case FETCH_PROJECTS:
      return { ...state, projects: action.payload }
    case ADD_PROJECT:
      return { ...state, projects: [...state.projects, action.payload] }
    default:
      return state;
  }
}