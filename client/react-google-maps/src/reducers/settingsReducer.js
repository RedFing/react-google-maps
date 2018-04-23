import { SETTINGS_SHOW_MARKERS_CHANGED } from '../actions/actionTypes';

const INITIAL_STATE = {
  showMarkers: true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SETTINGS_SHOW_MARKERS_CHANGED:
      return {
        ...state,
        showMarkers: !state.showMarkers,
      };
    default:
      return state;
  }
};
