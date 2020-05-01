import React from 'react';
import { Link } from 'react-router-dom';

import { Popover } from '../../common/components/Popover';

import { PopoverContent } from './components/PopoverContent';

import { Container, StyledLinkTitle, IconWrapper, Settings } from './Navigation.styles';

const Navigation = () => (
  <Container>
    <StyledLinkTitle to='/'>
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

export default Navigation;
