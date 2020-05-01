import { SET_DRAWER_VISIBILITY, SET_SELECTED_TEXT } from '../actions/landingPageActions';

const STATE = {
  isDrawerVisible: false,
  selectedText: null,
};

const landingPageReducer = (state = STATE, action) => {
  switch (action.type) {
    case SET_DRAWER_VISIBILITY:
      return  {...state, isDrawerVisible: action.isDrawerVisible }
    case SET_SELECTED_TEXT:
      return {...state, selectedText: action.selectedText }
    default:
      return state;
  }
}

export default landingPageReducer;
