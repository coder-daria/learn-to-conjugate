import React from 'react';

import { Container } from './TextField.styles';

const TextField = ({ setSelectedText }) => (
  <Container onDoubleClick={setSelectedText} />
);

export default TextField;
