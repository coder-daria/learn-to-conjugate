import styled from 'styled-components';

import { NAV_HEIGHT, FOOTER_HEIGHT } from '../../../constants/sizes';
import { DEFAULT_PADDING, DEFAULT_MARGIN } from '../../../constants/spaces';
import COLORS from '../../../constants/colors';

import { ResetStyles } from '../../styles/Button.styles';

export const Container = styled.div`
  background: inherit;
  border-left: 1px solid ${COLORS.grey.light};
  height: 100vh;
  overflow-x: hidden;
  transition: width 0.2s;
  width: ${({ isOpen }) => isOpen ? '700px' : '0'};
`;

export const Header = styled.div`
  align-items: center;
  display: flex;
  font-size: 1.2em;
  height: ${NAV_HEIGHT};
  padding: ${DEFAULT_PADDING};
`;

export const SelectedWord = styled.span`
  font-weight: 500;
  padding-left: ${DEFAULT_PADDING};
`;

export const Content = styled.div`
  height: calc(100% - ${NAV_HEIGHT} - ${FOOTER_HEIGHT});
  overflow-y: scroll;
  padding: ${DEFAULT_PADDING};
`;

export const TenseContainer = styled.div`
  padding-bottom: ${DEFAULT_PADDING};
`;

export const TenseName = styled.span`
  font-size: 1.1em;
  width: 100%;
`;

export const Tenses = styled.ul`
  ${ResetStyles};
`;

export const Conjugations = styled.li`
  display: flex;
  list-style-type: none;
  padding: ${DEFAULT_PADDING};
`;

export const Person = styled.span`
  display: inline-block;
  font-weight: bold;
  padding-right: ${DEFAULT_PADDING};
  width: 30%;
`;

export const Footer = styled.div`
  align-items: center;
  background-color: inherit;
  display: flex;
  height: ${FOOTER_HEIGHT};
  justify-content: flex-end;
  padding: 0 ${DEFAULT_PADDING};
  width: 100%;

  button:first-child {
    margin-right: ${DEFAULT_MARGIN};
  }
`;
