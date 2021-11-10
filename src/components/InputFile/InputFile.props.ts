import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export interface InputFileProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  id: string;
  title: string;
}
