import React from 'react';

import Searchbar from '../Searchbar/';
import Menu from '../Menu/';
import {
  Nav
} from './styles';

const Navbar = () => {
  return(
    <Nav>
      <Searchbar />
      <Menu />
    </Nav>
  );
};

export default Navbar;