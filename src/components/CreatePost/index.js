import React, { useRef } from 'react';
import { connect } from 'react-redux';

import { addPost } from 'actions';

import {
  CreatePostContainer,
  Heading,
  TextBox,
  ShareButton
} from './styles';

const CreatePost = props => {
  const textAreaEl = useRef(null);

  const handlePostSubmission = e => {
    e.preventDefault();
    const postData = {
      postDate: new Date(),
      postTitle: null,
      postContent: textAreaEl.current.value,
      projectId: props.selectedProject
    };

    props.addPost(postData);
  };

  return(
    <CreatePostContainer data-testid="createPostWindow">
      <form>
        <Heading>Create Post</Heading>
        <TextBox ref={textAreaEl} data-testid="createPostInput" placeholder="Write an update on your project..." />
        <ShareButton onClick={(e) => handlePostSubmission(e)} data-testid="createPostButton">Share</ShareButton>
      </form>
    </CreatePostContainer>
  );
};

export default connect(null, { addPost })(CreatePost);