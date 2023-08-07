import { combineReducers } from 'redux';
import positions from './positions';
import modes from './modes';

const rootReducer = combineReducers({
  positions,
  modes,
});

export default rootReducer;
