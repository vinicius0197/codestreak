import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import {
  render,
  cleanup,
  fireEvent
} from '@testing-library/react';

import { createMemoryHistory } from 'history';
import mockAxios from 'apis';

import Root from 'Root';
import CreateProject from 'components/CreateProject';

describe('<CreateProject />', () => {
  afterEach(cleanup);

  it('creates a new project', () => {
    const newProject = {
      projectName: 'project new',
      projectDescription: 'project description'
    };
    const history = createMemoryHistory();
    const route = '/statistics';
    history.push(route);
    ReactDOM.createPortal = jest.fn(modal => modal);
    const { getByTestId } = render(
      <Root>
        <Router history={history}>
          <CreateProject />
        </Router>
      </Root>
    );

    fireEvent.change(
      getByTestId('projectName'),
      {
        target: {
          value: 'project new'
        }
      }
    );

    fireEvent.change(
      getByTestId('projectDescription'),
      {
        target: {
          value: 'project description'
        }
      }
    );
    fireEvent.click(getByTestId('finishButton'));

    expect(mockAxios.post).toHaveBeenCalledWith('/new_project', newProject);
    expect(mockAxios.post).toHaveBeenCalledTimes(1);
  });
});