import { combineReducers } from 'redux';
import settingsReducer from './settingsReducer';
import markersReducer from './markersReducer';

export default combineReducers({
  settings: settingsReducer,
  markers: markersReducer,
});
