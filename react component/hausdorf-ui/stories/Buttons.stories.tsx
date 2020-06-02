import Buttons from '../src/components/Buttons';
import React from 'react';

export default {
  title: 'Buttons',
  component: Buttons,
};

export const Default = () => <Buttons />;
export const Not = () => <Buttons not />;
