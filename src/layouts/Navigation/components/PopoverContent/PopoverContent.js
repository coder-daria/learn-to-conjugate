import React from 'react';
import { useDispatch } from 'react-redux';

import { toggleDrawer } from '../../../../redux/utils/drawer';

import { Menu, MenuItem, StyledLink } from './PopoverContent.styles';

const PopoverContent = () => {
  const dispatch = useDispatch();

  const closeDrawer = () => {
    toggleDrawer({ dispatch })
  };

  return (
    <Menu>
      <MenuItem>
        <StyledLink to="/settings" onClick={closeDrawer}>Settings</StyledLink>
      </MenuItem>
    </Menu>
  );
}

export default PopoverContent;
