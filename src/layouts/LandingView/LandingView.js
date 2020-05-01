import React from 'react';
import { useDispatch } from 'react-redux';

import { SET_SELECTED_TEXT, SET_DRAWER_VISIBILITY } from '../../redux/actions/landingPageActions';

import { Container, Content, ActionButtons, StyledButton, StyledSendIcon, StyledResetIcon } from './LandingView.styles';

const LandingPage = () => {
  const dispatch = useDispatch();

  const setSelectedValue = () => {
    const selectedText = window.getSelection().toString();

    if(selectedText) {
      dispatch({ type: SET_SELECTED_TEXT, selectedText });
      dispatch({ type: SET_DRAWER_VISIBILITY, isDrawerVisible: true });
    }
  };

  const handleClick = () => {
    const content = document.getElementById('content').textContent;
    // @todo Send text to BE
  };

  const resetContent = () => {
    document.getElementById('content').textContent = '';
  };

  return (
    <Container>
      <ActionButtons>
        <StyledButton onClick={handleClick}>
          <StyledSendIcon />
        </StyledButton>
        <StyledButton onClick={resetContent}>
          <StyledResetIcon />
        </StyledButton>
      </ActionButtons>
        <Content
          id="content"
          onDoubleClick={setSelectedValue}
          contentEditable
        />
    </Container>
  );
}

export default LandingPage;
