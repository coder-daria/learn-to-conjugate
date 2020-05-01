import React from 'react';

import { Popover } from '../../common/components/Popover';

import { PopoverContent } from './components/PopoverContent';

import { Container, Title, IconWrapper, Settings } from './Navigation.styles';

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
