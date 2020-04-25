import styled, { css } from 'styled-components';
import { ReactComponent as RightArrow } from 'assets/right-arrow.svg';
import { ReactComponent as LeftArrow } from 'assets/left-arrow.svg';

export const LeftArrowIcon = styled(LeftArrow)`
  width: 24px;
  height: 18px;
  cursor: pointer;
`;

export const RightArrowIcon = styled(RightArrow)`
  width: 24px;
  height: 18px;
  cursor: pointer;
`;

export const Frame = styled.div`
  width: 400px;
  background: #FFFFFF;
  border: 1px solid #BBC6D1;
  border-radius: 22px;
  padding: 1rem;
`;

export const Header = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 10px 10px 5px 10px;
  display: flex;
  justify-content: space-between;

  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.03em;

  color: #2F2F2F;
`;

export const Button = styled.div`
  cursor: pointer;
`;

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  z-index: auto;
`;

export const Day = styled.div`
  width: 14.2%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;

  color: ${props => props.heading ? "rgba(47, 47, 47, 0.75)" : "#2F2F2F" };

  /* Styling for streak days */

  ${props =>
    props.isSingleStreak &&
    css`
      color: #eee;
      background: #0CCA4A;
      border-radius: 20px;
    `}

  ${props =>
    props.isRangeStart &&
    css`
      color: #eee;
      background: #0CCA4A;
      border-radius: 20px 0 0 20px;
    `}
  
  ${props =>
    props.isRangeMiddle &&
    css`
      color: #eee;
      background: #0CCA4A;
    `}

  ${props => 
    props.isRangeEnd &&
    css`
      color: #eee;
      background: #0CCA4A;
      border-radius: 0px 20px 20px 0px;
    `}

  cursor: pointer;

  ${props =>
    props.isToday &&
    css`
      border: 1px solid #eee;
    `}

  ${props =>
    props.isSelected &&
    css`
      background-color: #eee;
    `}
`;