import mockAxios from 'apis';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { FETCH_PROJECTS } from 'actions/types';

import { fetchProjects } from 'actions/index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Action Creators', () => {
  it('fetches projects list from api', () => {
    mockAxios.get.mockResolvedValueOnce({ data:
      [{ projectName: 'project 1' }, { projectName: 'project 2' }]
    });

    const expectedActions = [
      { type: FETCH_PROJECTS, payload: [{ projectName: 'project 1' }, { projectName: 'project 2' }] }
    ];

    const store = mockStore({ projects: [] });

    return store.dispatch(fetchProjects()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
