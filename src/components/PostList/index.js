import React from 'react';

import {
  PostContainer,
  PostDate,
  PostTitle,
  PostContent,
  CommentContainer,
  CommentBox,
  MessageIcon,
  SendIcon
} from './styles';

const Post = () => {
  return(
    <PostContainer>
      <PostDate>December 24, 2019</PostDate>
      <PostTitle>Improved styling on navbar and added a few links</PostTitle>
      <PostContent>
        Hurried day today! I was able to find some time later in the day and take a look at that navbar that was bothering me. Lots of progress there! Also, I’ve added some new links in the homepage.
        Will take a better look at it tomorrow.
      </PostContent>
      <CommentContainer>
        <CommentBox placeholder="Write a comment" />
        <MessageIcon />
        <SendIcon />
      </CommentContainer>
    </PostContainer>
  );
};

const PostList = () => {
  return(
    <div data-testid="postsContainer">
      <Post data-testid="singlePost"/>
      <Post data-testid="singlePost"/>
      <Post data-testid="singlePost"/>
      <Post data-testid="singlePost"/>
      <Post data-testid="singlePost"/>
      <Post data-testid="singlePost"/>
      <Post data-testid="singlePost"/>
      <Post data-testid="singlePost"/>
    </div>
  );
};

export default PostList;