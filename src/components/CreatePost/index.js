import React from 'react';

import {
  CreatePostContainer,
  Heading,
  TextBox,
  ShareButton
} from './styles';

const CreatePost = () => {
  return(
    <CreatePostContainer data-testid="createPostWindow">
      <Heading>Create Post</Heading>
      <TextBox data-testid="createPostInput" placeholder="Write an update on your project..." />
      <ShareButton data-testid="createPostButton">Share</ShareButton>
    </CreatePostContainer>
  );
};

export default CreatePost;