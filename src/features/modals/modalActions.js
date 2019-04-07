import {MODAL_CLOSE, MODAL_OPEN} from './modalConstant';

export const openModal = (modalType, modalProps) => {
  return {
    type: MODAL_OPEN,
    payload: {
      modalType,
      modalProps,
    },
  };
};

export const closeModal = () => {
  return {
    type: MODAL_CLOSE,
  };
};
