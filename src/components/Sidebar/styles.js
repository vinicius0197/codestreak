import styled from 'styled-components';
import { ReactComponent as Home } from '../../assets/home.svg';
import { ReactComponent as Stats } from '../../assets/airplay.svg';


export const SidebarBackground = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 5.5rem;
  height: 100vh;
  background-color: #0920FB;
  overflow-x: hidden;
  padding-top: 30px;
`;

export const SidebarButton = styled.div`
  width: 44px;
  height: 44px;
  padding: 11px;
  background: #FDFDFD;
  margin: 1rem 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  cursor: pointer;
  transition-duration: 0.25s;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  }
`;

export const HomeIcon = styled(Home)`
  height: 20px;
  width: 20px;
`;

export const StatsIcon = styled(Stats)`
  height: 20px;
  width: 20px;
`;