import { action } from '@storybook/addon-actions';
import React from 'react';

import Button from '../src/ui/components/Button';
import CallEndIcon from '../src/ui/components/icons/call-end.svg';
import CameraFlipIcon from '../src/ui/components/icons/camera-flip.svg';

export default {
  title: 'Button',
  component: Button,
  decorators: [
    (storyFn: any) => <div className="videochat__control">{storyFn()}</div>,
  ],
};

export const EndCall = () => (
  <Button className="videochat__disconnect" onClick={action('click')}>
    <CallEndIcon />
  </Button>
);

export const FlipCamera = () => (
  <Button className="videochat__change js-change" onClick={action('click')}>
    <CameraFlipIcon />
  </Button>
);
