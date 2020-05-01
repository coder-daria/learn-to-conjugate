import styled from 'styled-components';

import { SMALL_PADDING } from '../../../../constants/spaces';

import { ResetStyles } from '../../../../common/styles/Button.styles';

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  ${ResetStyles};
`;

export const MenuItem = styled.li`
  cursor: pointer;
  list-style-type: none;
  padding: ${SMALL_PADDING};
  text-align: left;
  width: 100%;

  :hover {
    background: rgba(33,33,33,.2);
  }
`;
