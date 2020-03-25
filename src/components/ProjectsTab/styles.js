import styled from 'styled-components';

export const ProjectsBackground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 6rem;
  min-width: 15rem;
`;

export const ProjectItemContainer = styled.button`
  display: flex;
  background-color: inherit;
  padding: 0 0.8rem;
  margin: 0.9rem 1rem;
  height: 3rem;
  width: 11rem;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  transition: 0.3s;

  &:hover {
    background-color: inherit;
    background: #F3F5FE;
    border-radius: 18px;
  }
`;

export const ProjectBullet = styled.div`
  width: 10px;
  height: 10px;
  margin-right: 0.4rem;
  border-radius: 50%;
  background-color: #BBC6D1;

  transition: 0.3s;

  ${ProjectItemContainer}:hover & {
    background-color: #1F6FF8;
  }
`;

export const ProjectItem = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0.015em;
  color: #BBC6D1;

  transition: 0.3s;

  ${ProjectItemContainer}:hover & {
    color: #1F6FF8;
  }
`;

export const NewProjectButton = styled.button`
  margin-left: 68px;
  margin-bottom: 40px;
  width: 105px;
  height: 147px;
  background: #F3F5FE;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 22px;
  cursor: pointer;

  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.015em;

  color: #1F6FF8;

  transition-duration: 0.25s;

  &:hover {
    margin-bottom: 50px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  }
`;