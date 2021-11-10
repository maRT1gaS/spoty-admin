import React, { useRef } from 'react';
import { createPortal } from 'react-dom';
import { closeEditModal } from '../../../redux/slices/editModalSlice';
import {
  openConfirmation,
  closeConfirmation,
} from '../../../redux/slices/confirmationSlice';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import { EditModalWrapperProps } from './EditModalWrapper.props';
import {
  EditModalWrapperBackdrop,
  EditModalWrapperWindow,
} from './EditModalWrapper.style';

const EditModalWrapper: React.FC<EditModalWrapperProps> = ({
  children,
}: EditModalWrapperProps): JSX.Element | null => {
  const editModalPortal = document.getElementById('edit-modal');
  const backdropRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const dispatch = useAppDispatch();

  const exitModalWindow = () => {
    dispatch(closeConfirmation());
    dispatch(closeEditModal());
  };

  const closeModal = (e: React.MouseEvent) => {
    if (backdropRef.current.className === (e.target as Element).className) {
      dispatch(
        openConfirmation({
          text: 'Не сохранять данные?',
          bgWarning: true,
          textButton: 'Не сохранять',
          onClick: () => exitModalWindow(),
        })
      );
    }
  };

  return editModalPortal
    ? createPortal(
        <EditModalWrapperBackdrop
          ref={backdropRef}
          onClick={(event) => closeModal(event)}
        >
          <EditModalWrapperWindow>{children}</EditModalWrapperWindow>
        </EditModalWrapperBackdrop>,
        editModalPortal
      )
    : null;
};

export default EditModalWrapper;
