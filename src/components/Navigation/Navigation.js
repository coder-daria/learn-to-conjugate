import React from 'react';

import { Container } from './Navigation.styles';

const Navigation = ({ openDrawer }) => (
  <Container onClick={openDrawer} />
);

export default Navigation;
