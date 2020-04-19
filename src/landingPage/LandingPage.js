import React from 'react';

import { TextField } from '../components/TextField';

import { Container } from './LandingPage.styles';

const LandingPage = ({ setSelectedText }) => {
  const selectedValue = () => {
    const selectedText = window.getSelection().toString();

    if(selectedText) {
      setSelectedText(selectedText);
    }
  };

  return (
    <Container>
      <TextField setSelectedText={selectedValue}/>
    </Container>
  );
}

export default LandingPage;
