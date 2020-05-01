import React from 'react';

import { Menu, MenuItem, StyledLink } from './PopoverContent.styles';

const PopoverContent = () => (
  <Menu>
    <MenuItem>
      <StyledLink to="/settings">Settings</StyledLink>
    </MenuItem>
  </Menu>
);

export default PopoverContent;
