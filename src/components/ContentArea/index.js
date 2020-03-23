import React from 'react';
import {
  ContentBackground
} from './styles';

const ContentArea = props => {
  return(
    <ContentBackground>
      { props.example }
    </ContentBackground>
  );
};

export default ContentArea;