/* eslint-disable import/prefer-default-export */

import axios from 'axios';

import { LOAD_MARKERS_FAILED, LOAD_MARKERS_PENDING, LOAD_MARKERS_SUCCESS, MARKER_SELECTED } from './actionTypes';

const loadMarkersPending = () => ({
  type: LOAD_MARKERS_PENDING,
});

const loadMarkersSuccess = markers => ({
  type: LOAD_MARKERS_SUCCESS,
  markers,
});

const loadMarkersFailed = error => ({
  type: LOAD_MARKERS_FAILED,
  error,
});


export const loadMarkers = () => (dispatch) => {
  dispatch(loadMarkersPending());
  axios.get('/api/')
    .then((res) => {
      dispatch(loadMarkersSuccess(res.data));
    })
    .catch(error => loadMarkersFailed(error));
};

export const selectMarker = markerId => ({
  type: MARKER_SELECTED,
  id: markerId,
});
