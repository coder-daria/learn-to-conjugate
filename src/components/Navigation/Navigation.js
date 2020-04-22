import React from 'react';

import { Container, Title, IconWrapper, Settings } from './Navigation.styles';

import { PopoverContent } from '../Popover/PopoverContent';

import { Popover } from '../Popover';

const Navigation = () => (
  <Container>
    <Title>Learn to conjugate</Title>
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
