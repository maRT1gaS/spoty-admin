import React, { Ref } from 'react';
import { InputProps } from './Input.props';
import { InputS } from './Input.style';

export type IntrinsicInput = JSX.IntrinsicElements['input'] & {
  ref?: Ref<HTMLInputElement>;
};

export const Input: React.FC<InputProps> = ({
  type,
  onChange,
  value,
  ...rest
}: InputProps): JSX.Element => (
  <InputS
    type={type}
    length={value.length}
    onChange={onChange}
    value={value}
    {...(rest as IntrinsicInput)}
  />
);
