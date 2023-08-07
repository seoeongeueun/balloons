import { combineReducers } from 'redux';
import positions from './positions';
import modes from './modes';
import time from './time';

const rootReducer = combineReducers({
  positions,
  modes,
  time,
});

export default rootReducer;
