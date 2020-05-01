import React from 'react';

import { Container, Content, ActionButtons, StyledButton, StyledSendIcon, StyledResetIcon } from './LandingPage.styles';

const LandingPage = ({ setSelectedText }) => {
  const setSelectedValue = () => {
    const selectedText = window.getSelection().toString();

    if(selectedText) {
      setSelectedText(selectedText);
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
