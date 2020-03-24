import React from 'react';

import {
  CreatePostContainer,
  Heading,
  TextBox,
  ShareButton
} from './styles';

const CreatePost = () => {
  return(
    <CreatePostContainer>
      <Heading>Create Post</Heading>
      <TextBox placeholder="Write an update on your project..." />
      <ShareButton>Share</ShareButton>
    </CreatePostContainer>
  );
};

export default CreatePost;