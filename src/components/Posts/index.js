import React, { useEffect } from 'react';
import CreatePost from '../CreatePost/';
import PostList from '../PostList/';

import { fetchPosts } from 'actions';

import { connect } from 'react-redux';

import {
  PostsContainer
} from './styles';

const Posts = props => {
  useEffect(() => {
    props.fetchPosts(props.selectedProject);
  });

  return(
    <PostsContainer>
      <CreatePost />
      <PostList/>
    </PostsContainer>
  );
};

const mapStateToProps = state => {
  return {
    selectedProject: state.projects.selectedProject
  }
};

export default connect(mapStateToProps, { fetchPosts })(Posts);