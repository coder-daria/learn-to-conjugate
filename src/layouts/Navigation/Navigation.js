import React from 'react';
import { useDispatch } from 'react-redux';

import { Popover } from '../../common/components/Popover';
import { toggleDrawer } from '../../redux/utils/drawer';

import { PopoverContent } from './components/PopoverContent';

import { Container, StyledLinkTitle, IconWrapper, Settings } from './Navigation.styles';

const Navigation = () => {
  const dispatch = useDispatch();

  const closeDrawer = () => {
    toggleDrawer({ dispatch })
  };

  return (
    <Container>
      <StyledLinkTitle to='/' onClick={closeDrawer}>
        Learn to conjugate
      </StyledLinkTitle>
      <Popover 
        icon={(
          <Settings>
            <IconWrapper />
          </Settings>
        )}>
        <PopoverContent />
      </Popover>
    </Container>
  );
};

export default Navigation;
