import React from 'react';
import AddIcon from '../../assets/svg/add.svg';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { openEditModal } from '../../redux/slices/editModalSlice';
import { AddButtonProps } from './AddButton.props';
import { AddButtonS } from './AddButton.style';

export const AddButton: React.FC<AddButtonProps> = ({
  typeModal,
}: AddButtonProps): JSX.Element => {
  const dispatch = useAppDispatch();
  return (
    <AddButtonS
      type='button'
      onClick={() => dispatch(openEditModal({ typeAction: 'add', typeModal }))}
    >
      <AddIcon />
    </AddButtonS>
  );
};
