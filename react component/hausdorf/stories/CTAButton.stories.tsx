import React from 'react';

import { CTAButton } from '../src/ui/components/CTAButton';

export default {
  title: 'Call to action',
  component: CTAButton,
};

export const Default = () => <CTAButton />;
export const Vertical = () => <CTAButton vertical />;
