import React from 'react';
import CreatePost from '../CreatePost/';
import PostList from '../PostList/';

import {
  PostsContainer
} from './styles';

const Posts = () => {
  return(
    <PostsContainer>
      <CreatePost />
      <PostList />
    </PostsContainer>
  );
};

export default Posts;