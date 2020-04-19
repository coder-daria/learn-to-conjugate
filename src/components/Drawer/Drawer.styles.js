import styled from 'styled-components';

import { NAV_HEIGHT, FOOTER_HEIGHT } from '../../constants/sizes';
import { DEFAULT_PADDING, DEFAULT_MARGIN } from '../../constants/spaces';
import COLORS from '../../constants/colors';

export const Container = styled.div`
  background: ${COLORS.grey.default};
  height: 100vh;
  overflow-x: hidden;
  transition: width 0.2s;
  width: ${({ isOpen }) => isOpen ? ' 500px' : '0'};
`;

export const Header = styled.div`
  align-items: center;
  display: flex;
  height: ${NAV_HEIGHT};
  padding: ${DEFAULT_PADDING};
`;

export const SelectedWord = styled.span`
  font-weight: 600;
  padding-left: 5px;
`;

export const Content = styled.div`
  height: calc(100% - ${NAV_HEIGHT} - ${FOOTER_HEIGHT});
`;

export const Footer = styled.div`
  align-items: center;
  display: flex;
  height: ${FOOTER_HEIGHT};
  justify-content: flex-end;
  padding: 0 ${DEFAULT_PADDING};
  width: 100%;

  button:first-child {
    margin-right: ${DEFAULT_MARGIN};
  }
`;
