import { FETCH_PROJECTS } from 'actions/types';

export default function(state = { projects: [] }, action) {
  switch(action.type) {
    case FETCH_PROJECTS:
      return { ...state, projects: action.payload }
    default:
      return state;
  }
}