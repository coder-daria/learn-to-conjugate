import styled from 'styled-components';

import { NAV_HEIGHT, ACTION_BUTTONS_HEIGHT } from '../constants/sizes';
import COLORS from '../constants/colors';
import { DEFAULT_PADDING } from '../constants/spaces';
import { Button } from '../components/shared.styles';

import { ReactComponent as SendIcon } from '../icons/send.svg';
import { ReactComponent as TrashIcon } from '../icons/trash.svg';

export const ActionButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  height: ${ACTION_BUTTONS_HEIGHT};
`;

export const StyledButton = styled(Button)`
  width: 40px;
  height: 40px;
`;

export const StyledSendIcon = styled(SendIcon)`
  :hover {
    fill: ${COLORS.green.default};
  }
`;

export const StyledResetIcon = styled(TrashIcon)`
  :hover {
    fill: ${COLORS.red.default};
  }
`;

export const Container = styled.div`
  background:${COLORS.whitish.default};
  border-right: 1px solid ${COLORS.purple.light};
  height: calc(100vh - 100px);
  width: 100%;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Content = styled.div`
  background-color: inherit;
  display: flex;
  flex-direction: column;
  height: 100%;
  outline: none;
  overflow-y: scroll;
  padding: ${DEFAULT_PADDING};
  width: 100%;
`;
