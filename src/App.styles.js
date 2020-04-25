import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  font-family: 'Source Serif Pro', serif;
`;

export const Page = styled.div`
  width: ${({ isDrawerOpen }) => isDrawerOpen ? '100vw' : 'calc(100vw + 500px)'};
`;

