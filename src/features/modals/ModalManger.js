import React from 'react';
import {connect} from 'react-redux';
import TestModal from './TestModal';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
const modalLookUp = {
  TestModal,
  LoginModal,
  RegisterModal,
};

const ModalManager = ({currentModal}) => {
  let renderModal;
  if (currentModal) {
    const {modalType, modalProps} = currentModal;
    const ModalComponent = modalLookUp[modalType];

    renderModal = <ModalComponent {...modalProps} />;
  }
  return <span>{renderModal}</span>;
};

const mapStateToProps = state => ({
  currentModal: state.modals,
});
export default connect(mapStateToProps)(ModalManager);
