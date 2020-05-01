import styled from 'styled-components';

import COLORS from '../../../constants/colors';

export const StyledLine = styled.div`
  background-color: ${COLORS.purple.default};
  height: ${({ isVertical }) => isVertical ? '100%' : '1px'};
  width: ${({ isVertical }) => isVertical ? '1px' : '100%'};
`;

