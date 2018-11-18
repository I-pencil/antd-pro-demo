import { combineReducers } from 'redux';
// import totalAmount from '../../pages/dashboard/analysis/store/reducer';
import * as commons from './common';

const reducers = combineReducers({
  // totalAmount,
  ...commons,
});

export default reducers;
