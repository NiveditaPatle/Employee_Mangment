// store.js
import { createStore, combineReducers } from 'redux';
import employeeReducer from './reducers/employeeReducer';

const rootReducer = combineReducers({
  employee: employeeReducer,
  // Add more reducers if needed
});

const store = createStore(rootReducer);

export default store;
