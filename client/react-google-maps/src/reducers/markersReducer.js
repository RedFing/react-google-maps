/* eslint-disable max-len */

import { LOAD_MARKERS_FAILED, LOAD_MARKERS_SUCCESS, LOAD_MARKERS_PENDING, MARKER_SELECTED } from '../actions/actionTypes';

const INITIAL_STATE = {
  items: [],
  loading: false,
  error: false,
};


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_MARKERS_PENDING:
      return {
        ...state,
        loading: true,
      };
    case LOAD_MARKERS_SUCCESS:
      return {
        ...state,
        items: action.markers.map(m => ({ ...m, isOpen: false })),
        loading: false,
        error: false,
      };
    case LOAD_MARKERS_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case MARKER_SELECTED:
      return {
        ...state,
        items: state.items.map(m => (m.id === action.id ? { ...m, isOpen: !m.isOpen } : { ...m, isOpen: false })),
      };
    default:
      return state;
  }
};
