import { createStore, combineReducers } from 'redux';
import { espaciosReducer } from './reducers';

const rootReducer = combineReducers({
  espacios: espaciosReducer,
});

const store = createStore(rootReducer);

export default store;
