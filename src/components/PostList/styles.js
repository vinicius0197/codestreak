import styled from 'styled-components';
import { ReactComponent as MessageImage } from '../../assets/message-circle.svg';
import { ReactComponent as SendImage } from '../../assets/send.svg';

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 90%;
  margin-left: 2.2rem;
  margin-bottom: 2.2rem;
  background: #FFFFFF;
  border-radius: 22px;
  font-family: Open Sans;
  padding-bottom: 1rem;
`;

export const PostDate = styled.time`
  margin-left: 22px;
  margin-top: 15px;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 0.015em;
  color: #BBC6D1;
`;

export const PostContent = styled.div`
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: #373D3F;
  margin-left: 22px;
  margin-right: 30px;
  margin-top: 9px;
`;

export const CommentContainer = styled.div`
  display: flex;
  position: relative;
`;

export const CommentBox = styled.input`
  background: #FFFFFF;
  border: 2px solid #F5F7F9;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.01);
  border-radius: 22px;
  margin-left: 22px;
  margin-right: 30px;
  margin-top: 9px;
  height: 36px;
  width: 600px;
  padding-left: 38px;
  margin-top: 30px;

  &::placeholder {
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    color: #BBC6D1;
  }
`;

export const MessageIcon = styled(MessageImage)`
  position: absolute;
  margin-top: 39px;
  margin-left: 35px;
  width: 24px;
  height: 18px;
`;

export const SendIcon = styled(SendImage)`
  position: absolute;
  margin-top: 39px;
  right: 45px;
  width: 24px;
  height: 18px;
  cursor: pointer;

  transition-duration: 0.25s;

  &:hover {
    transform: scale(1.1);
  }
`;