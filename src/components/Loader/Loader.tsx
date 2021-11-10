import Bars from 'react-loader-spinner';
import React from 'react';
import { LoaderCon } from './Loader.style';

export const Loader = (): JSX.Element => (
  <LoaderCon>
    <Bars type='Bars' color='#28BF30' height={80} width={80} />
  </LoaderCon>
);
