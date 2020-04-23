import mockAxios from 'apis';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { FETCH_PROJECTS, ADD_PROJECT, SELECT_PROJECT, FETCH_POSTS, ADD_POST } from 'actions/types';

import { fetchProjects, addProject, selectProject, fetchPosts, addPost } from 'actions/index';

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

  it('creates a new project', () => {
    mockAxios.post.mockResolvedValueOnce({ data:
      { projectName: 'project new', projectDescription: 'description' }
    });
  
    const expectedActions = [
      { type: ADD_PROJECT, payload: { projectName: 'project new', projectDescription: 'description' } }
    ];
  
    const store = mockStore({ projects: [] });
  
    return store.dispatch(addProject({ projectName: 'project new', projectDescription: 'description' })).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should select a new project to be displayed', () => {
    const selectedProjectId = 1;
    const expectedAction = {
      type: SELECT_PROJECT, payload: selectedProjectId
    };

    expect(selectProject(selectedProjectId)).toEqual(expectedAction);
  });

  it('should fetch a list of posts for the selected project', () => {
    const projectedId = 1;
    const fetchedProjects = [
      {
        id: 1,
        projectName: "CodeStreaks",
        hash: "xrXr82336rrS3Pqh0X2FcUdfer",
        projectDescription: "test description"
      },
    ];

    const fetchedPosts = {
      posts: [
        { id: 1, postDate: 'Wed Mar 25 2020', postContent: 'lorem ipsum' },
        { id: 2, postDate: 'Wed Mar 25 2020', postContent: 'lorem ipsum' }
      ]
    };

    mockAxios.get.mockResolvedValueOnce({
      data: fetchedProjects
    });

    mockAxios.get.mockResolvedValueOnce({
      data: fetchedPosts
    });

    const expectedActions = [
      { type: FETCH_POSTS, payload: fetchedPosts }
    ];

    const store = mockStore({ projects: [] });

    return store.dispatch(fetchPosts(projectedId)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should dispatch action to create a new post', () => {
    const postData = {
      postDate: "Wed Mar 25 2020 11:01:01 GMT-0300 (Brasilia Standard Time)",
      postContent: "lorem ipsum",
      projectId: 1
    };

    mockAxios.post.mockResolvedValueOnce({
      data: postData
    });

    const expectedActions = [
      { type: ADD_POST, payload: postData }
    ];

    const store = mockStore({ projects: [] });

    return store.dispatch(addPost(postData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
