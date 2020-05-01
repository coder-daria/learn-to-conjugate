import styled from 'styled-components';

import COLORS from './constants/colors';

export const Container = styled.div`
  background-color: ${COLORS.white.dark};
  display: flex;
  font-family: 'Source Serif Pro', serif;
  height: 100vh;
  width: 100vw;
`;

export const Page = styled.div`
  width: ${({ isDrawerOpen }) => isDrawerOpen ? '100vw' : 'calc(100vw + 500px)'};
`;

