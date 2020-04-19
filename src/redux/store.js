import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import thunk from 'redux-thunk';


export default () => {
  const middleware = [thunk];
  const store = createStore(
  	rootReducer,
  	{}, 
  	composeWithDevTools(
  		applyMiddleware(...middleware)
  	)
  );

  return store;
}
