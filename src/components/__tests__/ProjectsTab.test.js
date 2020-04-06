import React from 'react';
import mockAxios from 'axios';
import { Router } from 'react-router-dom';
import {
  render,
  cleanup,
} from '@testing-library/react';

import { createMemoryHistory } from 'history'

import Root from 'Root';
import ProjectsTab from 'components/ProjectsTab';

describe('<ProjectsTab> ', () => {
  afterEach(cleanup);

  describe('Rendering the component', () => {
    afterEach(cleanup);

    it('populates with data from API', async () => {
      mockAxios.get.mockResolvedValueOnce({ data:
        [{ projectName: 'project 1' }, { projectName: 'project 2' }]
      });
    
      const history = createMemoryHistory();
      const route = '/statistics';
      history.push(route);
      const { findAllByTestId } = render(
        <Root>
          <Router history={history}>
            <ProjectsTab />
          </Router>
        </Root>
      );

      const resolvedProjects = await findAllByTestId('project-item');
      expect(resolvedProjects).toHaveLength(2);
      expect(mockAxios.get).toHaveBeenCalledWith('http:localhost:3001/projects');
    });
  });
});