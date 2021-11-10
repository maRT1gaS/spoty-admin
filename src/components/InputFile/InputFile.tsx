import React, { Ref } from 'react';
import { InputFileProps } from './InputFile.props';
import { InputFileS, InputFileSpan, InputFileLabel } from './InputFile.style';

export type IntrinsicInput = JSX.IntrinsicElements['input'] & {
  ref?: Ref<HTMLInputElement>;
};

export const InputFile: React.FC<InputFileProps> = ({
  title,
  id,
  ...rest
}: InputFileProps): JSX.Element => (
  <div>
    <InputFileS id={id} type='file' {...(rest as IntrinsicInput)} />
    <InputFileLabel htmlFor={id}>
      <InputFileSpan>{title}</InputFileSpan>
    </InputFileLabel>
  </div>
);
