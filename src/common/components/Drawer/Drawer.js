import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SuccessButton, CancelButton } from '../../styles/Button.styles';

import { SET_DRAWER_VISIBILITY } from '../../../redux/actions/landingPageActions';

import { Container, Header, SelectedWord, Content, Footer } from './Drawer.styles';

const Drawer = () => {
  const { isDrawerVisible, selectedText } = useSelector(state => state.landingPageReducer);
  const dispatch = useDispatch();

  const closeDrawer = () => {
    dispatch({ type: SET_DRAWER_VISIBILITY, isDrawerVisible: false });
  };

  return (
    <Container isOpen={isDrawerVisible}>
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
}

export default Drawer;
