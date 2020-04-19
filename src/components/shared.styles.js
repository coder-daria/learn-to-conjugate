import styled from 'styled-components';

import { BUTTON_HEIGHT, BUTTON_WIDTH } from '../constants/sizes';
import COLORS from '../constants/colors';

export const SuccessStyles = `
  background: ${COLORS.green.default};
  color: ${COLORS.white.default};
`;

export const CancelStyles = `
  background: ${COLORS.red.default};
  color: ${COLORS.white.default}
`;

export const Button = styled.button`
  border: transparent;
  cursor: pointer;
  height: ${BUTTON_HEIGHT};
  outline: none;
  width: ${BUTTON_WIDTH};
`;

export const SuccessButton = styled(Button)`
 ${SuccessStyles};
`;

export const CancelButton = styled(Button)`
 ${CancelStyles};
`;
