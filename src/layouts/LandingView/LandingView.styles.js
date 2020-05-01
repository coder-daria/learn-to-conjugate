import styled from 'styled-components';

import { ACTION_BUTTONS_HEIGHT } from '../../constants/sizes';
import COLORS from '../../constants/colors';
import { BIG_PADDING } from '../../constants/spaces';
import { Button } from '../../common/styles/Button.styles';

import { ReactComponent as SendIcon } from '../../icons/send.svg';
import { ReactComponent as TrashIcon } from '../../icons/trash.svg';

export const ActionButtons = styled.div`
  align-items: center;
  border-bottom: 1px solid ${COLORS.grey.light};
  display: flex;
  height: ${ACTION_BUTTONS_HEIGHT};
  justify-content: flex-end;
`;

export const StyledButton = styled(Button)`
  width: 35px;
  height: 35px;
`;

export const StyledSendIcon = styled(SendIcon)`
  :hover {
    fill: ${COLORS.green.default};
  }

  :active {
    fill: ${COLORS.green.dark};
  }
`;

export const StyledResetIcon = styled(TrashIcon)`
  :hover {
    fill: ${COLORS.red.default};
  }

  :active {
    fill: ${COLORS.red.dark};
  }
`;

export const Container = styled.div`
  height: calc(100vh - 100px);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  outline: none;
  overflow-y: scroll;
  padding: ${BIG_PADDING};
  width: 100%;
`;
