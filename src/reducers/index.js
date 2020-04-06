import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import projectsReducer from 'reducers/projects';

export default combineReducers({
  form: formReducer,
  projects: projectsReducer
});