import styled from 'styled-components';

import { BUTTON_HEIGHT, BUTTON_WIDTH } from '../../constants/sizes';
import COLORS from '../../constants/colors';

export const ResetStyles = `
  margin: 0;
  padding: 0;
`;

export const SuccessStyles = `
  background: ${COLORS.green.light};
  color: ${COLORS.white.default};
`;

export const CancelStyles = `
  background: ${COLORS.red.light};
  color: ${COLORS.white.default}
`;

export const Button = styled.button`
  background-color: ${COLORS.transparent.default};
  border: ${COLORS.transparent.default};
  cursor: pointer;
  height: ${({ height }) => height || BUTTON_HEIGHT};
  outline: none;
  width: ${({ width }) => width || BUTTON_WIDTH};
`;

export const SuccessButton = styled(Button)`
  ${SuccessStyles};

  :hover {
    background-color: ${COLORS.green.default};
  }

  :active {
    background-color: ${COLORS.green.dark};
  }
`;

export const CancelButton = styled(Button)`
  ${CancelStyles};

  :hover {
      background-color: ${COLORS.red.default};
    }

  :active {
    background-color: ${COLORS.red.dark};
  }
`;
