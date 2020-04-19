import styled from 'styled-components';

import { NAV_HEIGHT } from '../constants/sizes';
import COLORS from '../constants/colors';

export const Container = styled.div`
  background:${COLORS.whitish.default};
  border-right: 1px solid ${COLORS.purple.light};
  height: calc(100vh - ${NAV_HEIGHT});
  width: 100%;
`;
