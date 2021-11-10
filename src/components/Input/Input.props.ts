import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  type: 'text' | 'email' | 'number' | 'password';
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
  value: string;
}
