import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import RootReducer from './reducers/indexReducers';

const initialState = {};
const middleware = [thunk];

const Store = createStore(RootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));
export default Store;
