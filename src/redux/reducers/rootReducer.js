import { combineReducers } from 'redux';

import counter from './counter';

const rootReducer: any = combineReducers({
  counter,
});
export default rootReducer;
