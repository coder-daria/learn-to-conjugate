export const SET_DRAWER_VISIBILITY = 'SET_DRAWER_VISIBILITY';
export const SET_SELECTED_TEXT = 'SET_SELECTED_TEXT';

export const setDrawerVisibility = isDrawerVisible => ({
  type: SET_DRAWER_VISIBILITY,
  isDrawerVisible
});

export const setSelectedText = selectedWord => ({
  type: SET_SELECTED_TEXT,
  selectedWord
});
