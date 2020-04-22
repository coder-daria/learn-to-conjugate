import styled from 'styled-components';

import { ReactComponent as SettingsIcon } from '../../icons/settings.svg';
import { NAV_HEIGHT, ICON_SIZEH_HEIGHT, ICON_SIZE_WIDTH } from '../../constants/sizes';
import { DEFAULT_PADDING } from '../../constants/spaces';
import COLORS from '../../constants/colors';

export const Container = styled.div`
  background: ${COLORS.purple.default};
  display: flex;
  height: ${NAV_HEIGHT};
  justify-content: space-between;
  padding: ${DEFAULT_PADDING};
  width: 100%;
`;

export const Title = styled.div`
  color: ${COLORS.grey.default};
`;

export const Settings = styled.div`
  display: flex;
`;

export const IconWrapper = styled(SettingsIcon)`
  cursor: pointer;
  fill: ${COLORS.grey.default} !important;
  height: ${ICON_SIZEH_HEIGHT};
  width: ${ICON_SIZE_WIDTH};
`;
