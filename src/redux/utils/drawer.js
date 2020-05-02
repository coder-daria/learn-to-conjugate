import { SET_DRAWER_VISIBILITY, SET_SELECTED_TEXT } from '../actions/landingPageActions';

export const toggleDrawer = ({ dispatch, selectedText = null, isDrawerVisible = false }) => {
  dispatch({ type: SET_DRAWER_VISIBILITY, isDrawerVisible });
  dispatch({ type: SET_SELECTED_TEXT, selectedText });
};
