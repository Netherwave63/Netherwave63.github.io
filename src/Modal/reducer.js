// import action type
import { MODAL_TOGGLE } from './action';

// initial state
const initialState = {
  isActive: false,
  src: ''
};

// reducer
const modalReducer = (state = initialState, action) => {
  switch(action.type) {
    case MODAL_TOGGLE:
      return applyToggleModal(state, action);

    default:
      return state;
  };
};

// apply functionalities
const applyToggleModal = (state, action) => ({
  isActive: !state.isActive,
  src: action.payload.src
});

// export 
export default modalReducer;

