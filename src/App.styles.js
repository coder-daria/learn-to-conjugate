import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Page = styled.div`
  width: ${({ isDrawerOpen }) => isDrawerOpen ? '100vw' : 'calc(100vw + 500px)'};
`;

