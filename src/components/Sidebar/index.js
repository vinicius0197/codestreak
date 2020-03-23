import React from 'react';

import {
  Link
} from "react-router-dom";

import {
  SidebarBackground,
  SidebarButton,
  HomeIcon,
  StatsIcon
} from './styles';

const Sidebar = () => {
  return(
    <SidebarBackground>
      <Link to="/">
        <SidebarButton>
          <HomeIcon />
        </SidebarButton>
      </Link>

      <Link to="/statistics">
        <SidebarButton>
          <StatsIcon />
        </SidebarButton>        
      </Link>
    </SidebarBackground>
  );
};

export default Sidebar;