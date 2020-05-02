import React from 'react';
import { useDispatch } from 'react-redux';

import { fetchTense } from '../../server/API';

import { toggleDrawer } from '../../redux/utils/drawer'

import { Container, Content, ActionButtons, StyledButton, StyledSendIcon, StyledResetIcon } from './LandingView.styles';

const LandingPage = () => {
  const dispatch = useDispatch();

  const setSelectedValue = async () => {
    const selectedText = window.getSelection().toString();

    if(selectedText) {
      const fetchedTense = await fetchTense(selectedText);

      toggleDrawer({dispatch, selectedText: fetchedTense, isDrawerVisible: true })
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
