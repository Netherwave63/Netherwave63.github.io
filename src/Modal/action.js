// action type
const MODAL_TOGGLE = 'MODAL_TOGGLE';

// action creator
const doToggleModal = (src = '') => ({
  type: MODAL_TOGGLE,
  payload: {
    src
  }
});

// export
export {
  MODAL_TOGGLE,
  doToggleModal
};