import React from 'react';
import { createPortal } from 'react-dom';
import { ConfirmationProps } from './Confirmation.props';
import {
  ConfirmationScreen,
  ConfirmationWrap,
  ConfirmationText,
  ConfirmationBtnCon,
  ConfirmationBtn,
} from './Confirmation.style';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { closeConfirmation } from '../../redux/slices/confirmationSlice';

export const Confirmation: React.FC<ConfirmationProps> = ({
  onClick,
  textButton,
  text,
  bgWarning,
}: ConfirmationProps): JSX.Element | null => {
  const confirmationPortal = document.getElementById('confirmation');
  const dispatch = useAppDispatch();

  return confirmationPortal
    ? createPortal(
        <ConfirmationScreen>
          <ConfirmationWrap>
            <ConfirmationText>{text}</ConfirmationText>
            <ConfirmationBtnCon>
              <ConfirmationBtn
                type='button'
                onClick={() => dispatch(closeConfirmation())}
              >
                Отменить
              </ConfirmationBtn>
              <ConfirmationBtn
                type='button'
                bgWarning={bgWarning}
                onClick={onClick}
              >
                {textButton}
              </ConfirmationBtn>
            </ConfirmationBtnCon>
          </ConfirmationWrap>
        </ConfirmationScreen>,
        confirmationPortal
      )
    : null;
};
