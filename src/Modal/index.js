// dependencies
import React from 'react';
import { connect } from 'react-redux';

// others
import { doToggleModal } from './action';

// Modal
const Modal = ({ src, onToggleModal}) => {

  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={() => onToggleModal()}>
      </div>

      <div className="modal-content">
        <p className="image">
          <img src={src} alt="screenshot pic"/>
        </p>
      </div>

      <button className="modal-close is-large" onClick={() => onToggleModal()}></button>
    </div>
  );
};

// export 
const mapStateToProps = state => ({
  src: state.modalState.src
});

const mapDispatchToProps = dispatch => ({
  onToggleModal: () => dispatch(doToggleModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);