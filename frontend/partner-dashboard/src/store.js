import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducers from './ducks/reducers'; // Adjust the path accordingly

const rootReducer = combineReducers({
  auth: reducers,
  // other reducers
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
