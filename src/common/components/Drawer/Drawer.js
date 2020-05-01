import React from 'react';

import { SuccessButton, CancelButton } from '../../styles/Button.styles';

import { Container, Header, SelectedWord, Content, Footer } from './Drawer.styles';

const Drawer = ({ selectedText, closeDrawer}) => (
  <Container isOpen={selectedText}>
    <Header>
      <span>Selected word:</span>
      <SelectedWord>{selectedText}</SelectedWord>
    </Header>
    <Content />
    <Footer>
      <CancelButton onClick={closeDrawer}>Cancel</CancelButton>
      <SuccessButton>Save</SuccessButton>
    </Footer>
  </Container>
);

export default Drawer;
