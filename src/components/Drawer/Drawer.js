import React from 'react';

import { Container, Header, SelectedWord, Content, Footer } from './Drawer.styles';

import { SuccessButton, CancelButton } from '../shared.styles';

const Drawer = ({ drawerItem, closeDrawer, forwardRef }) => (
  <Container isOpen={drawerItem} ref={forwardRef}>
    <Header>
      <span>Selected word:</span>
      <SelectedWord>{drawerItem}</SelectedWord>
    </Header>
    <Content />
    <Footer>
      <CancelButton onClick={closeDrawer}>Cancel</CancelButton>
      <SuccessButton>Save</SuccessButton>
    </Footer>
  </Container>
);

export default Drawer;
