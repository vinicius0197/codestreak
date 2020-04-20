import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';

export const CreatePostContainer = styled.div`
  margin: 2.2rem;
  background: #FFFFFF;
  border-radius: 22px;
  height: auto;
  width: 40rem;
  padding-bottom: 1rem;
`;

export const Heading = styled.div`
  margin-top: 1.2rem;
  margin-left: 2rem;
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 0.015em;

  color: #2F2F2F;
`;

export const TextBox = styled(TextareaAutosize)`
  margin-top: 1.2rem;
  margin-left: 2rem;
  width: 90%;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 16px;
  color: #2F2F2F;
  border: none; 
  resize: none;
  outline: none;
`;

export const ShareButton = styled.button`
  margin-top: 0.5rem;
  margin-left: 2rem;
  width: 8rem;
  height: 2.2rem;
  background: #1F6FF8;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 22px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: #FDFDFD;
  cursor: pointer;

  transform: perspective(1px) translateZ(0);
  backface-visibility: hidden;
  transition-duration: 0.25s;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  }
`;