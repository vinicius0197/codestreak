import React, { useRef, useState } from 'react';
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
  const [postContent, setPostContent] = useState('');

  const handlePostSubmission = e => {
    e.preventDefault();
    let currentDate = new Date();
    const postData = {
      postDate: currentDate.toDateString(),
      createdAt: currentDate,
      postContent: textAreaEl.current.value,
      projectId: props.selectedProject
    };

    props.addPost(postData);
    setPostContent('');
  };

  const onChangeContent = e => {
    setPostContent(e.target.value);
  };

  const handleKeyDown = e => {
    if(e.keyCode === 9) { // handles 'tab' character
      e.preventDefault();
      let val = textAreaEl.current.value;
      var start = textAreaEl.current.selectionStart;
      var end = textAreaEl.current.selectionEnd;

      textAreaEl.current.value = val.substring(0, start) + '\t' + val.substring(end);

      textAreaEl.current.selectionStart = textAreaEl.current.selectionEnd = start + 1;
    }
  };

  return(
    <CreatePostContainer data-testid="createPostWindow">
      <form>
        <Heading>Create Post</Heading>
        <TextBox
          value={postContent}
          onChange={e => onChangeContent(e)}
          inputRef={textAreaEl}
          onKeyDown={e => handleKeyDown(e)}
          data-testid="createPostInput"
          placeholder="Write an update on your project..."
        />
        <ShareButton onClick={(e) => handlePostSubmission(e)} data-testid="createPostButton">Share</ShareButton>
      </form>
    </CreatePostContainer>
  );
};

export default connect(null, { addPost })(CreatePost);