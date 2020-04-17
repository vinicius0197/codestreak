import React from 'react';
import { connect } from 'react-redux';

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

const Post = ({ postData }) => {
  debugger;
  return(
    <PostContainer data-testid="singlePost">
      <PostDate>{postData.postDate}</PostDate>
      <PostTitle>{postData.postTitle}</PostTitle>
      <PostContent>
        {postData.postContent}
      </PostContent>
      <CommentContainer>
        <CommentBox placeholder="Write a comment" />
        <MessageIcon />
        <SendIcon />
      </CommentContainer>
    </PostContainer>
  );
};

const PostList = props => {
  const renderPosts = () => {
    if(props.posts) {
      return(
        props.posts.map(post => {
          return <Post key={post.id} postData={post} />;
        })
      );
    } else {
      return 'Loading...';
    }
  };

  return(
    <div data-testid="postsContainer">
      { renderPosts() }
    </div>
  );
};

const mapStateToProps = state => {
  return {
    posts: state.projects.posts
  }
};

export default connect(mapStateToProps)(PostList);