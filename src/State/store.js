// dependencies
import { createStore } from 'redux';

// import reducers
import rootReducer from './rootReducer';

// store
const store = createStore(
  rootReducer
);

// export
export default store;
