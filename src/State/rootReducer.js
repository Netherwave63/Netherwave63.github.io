// dependencies
import { combineReducers } from 'redux';

// import all reducers
import modalReducer from '../Modal/reducer';

// rootReducer
const rootReducer = combineReducers({
  modalState: modalReducer
});

// export
export default rootReducer;
