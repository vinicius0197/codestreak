import React from 'react';
import mockAxios from 'apis';
import { Router } from 'react-router-dom';
import {
  render,
  cleanup,
} from '@testing-library/react';

import { createMemoryHistory } from 'history'

import Root from 'Root';
import Posts from 'components/Posts';

describe('<Posts />', () => {
  afterEach(cleanup);

  it('fetches posts from API when rendered', async () => {
    mockAxios.get.mockResolvedValueOnce({
      data: {
        posts: [
          { id: 1, postDate: 'Wed Mar 25 2020', postTitle: 'example title', postContent: 'lorem ipsum' },
          { id: 2, postDate: 'Wed Mar 25 2020', postTitle: 'example title', postContent: 'lorem ipsum' }
        ]
      }
    });

    const history = createMemoryHistory();
    const route = '/home';
    history.push(route);
    const { findAllByTestId } = render(
      <Root>
        <Router history={history}>
          <Posts />
        </Router>
      </Root>
    );

    const resolvedProjects = await findAllByTestId('singlePost');
    expect(resolvedProjects).toHaveLength(2);
  });
});