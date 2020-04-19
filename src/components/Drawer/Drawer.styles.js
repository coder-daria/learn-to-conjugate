import styled from 'styled-components';

export const Container = styled.div`
  background: lightblue;
  height: 100vh;
  overflow-x: hidden;
  transition: width 0.2s;
  width: ${({ isOpen }) => isOpen ? ' 500px' : '0'};
`;
