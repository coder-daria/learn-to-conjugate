import styled from 'styled-components';
import { Link } from "react-router-dom";

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


export const StyledLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  width: inherit;

  // todo Check why the active color is set to red;
  :hover { 
    color: inherit;
  }
`;