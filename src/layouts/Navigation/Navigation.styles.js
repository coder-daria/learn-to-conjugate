import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ReactComponent as SettingsIcon } from '../../icons/settings.svg';
import { NAV_HEIGHT, ICON_SIZEH_HEIGHT, ICON_SIZE_WIDTH } from '../../constants/sizes';
import { DEFAULT_PADDING } from '../../constants/spaces';
import COLORS from '../../constants/colors';

export const Container = styled.div`
  background: #45424C;
  display: flex;
  height: ${NAV_HEIGHT};
  justify-content: space-between;
  padding: ${DEFAULT_PADDING};
  width: 100%;
`;

export const StyledLinkTitle = styled(Link)`
  color: ${COLORS.whitish.default};
  text-decoration: none;
`;

export const Settings = styled.div`
  display: flex;
`;

export const IconWrapper = styled(SettingsIcon)`
  cursor: pointer;
  fill: ${COLORS.whitish.default} !important;
  height: ${ICON_SIZEH_HEIGHT};
  width: ${ICON_SIZE_WIDTH};

  :hover {
    fill: ${COLORS.grey.default} !important;
  }

  :active {
    fill: ${COLORS.grey.dark} !important;
  }
`;
