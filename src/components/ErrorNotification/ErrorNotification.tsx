import React from 'react';
import {
  ErrorWrapper,
  ErrorContent,
  ErrorSvg,
  ErrorTitle,
} from './ErrorNotification.style';
import ErrorIcon from '../../assets/svg/error.svg';
import { ErrorNotificationProps } from './ErrorNotification.props';

export const ErrorNotification: React.FC<ErrorNotificationProps> = ({
  title,
}: ErrorNotificationProps): JSX.Element => {
  return (
    <ErrorWrapper>
      <ErrorContent>
        <ErrorSvg>
          <ErrorIcon />
        </ErrorSvg>
        <ErrorTitle>{title}</ErrorTitle>
      </ErrorContent>
    </ErrorWrapper>
  );
};
