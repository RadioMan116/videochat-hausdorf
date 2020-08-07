import React from 'react';

import FullscreenButton from '../src/ui/call/FullscreenButton';

export default {
  title: 'FullscreenButton',
  component: FullscreenButton,
  decorators: [
    (storyFn: any) => (
      <div style={{ backgroundColor: 'black', width: 100, height: 100 }}>
        {storyFn()}
      </div>
    ),
  ],
};

export const Modal = () => <FullscreenButton variant="modal" />;
export const Fullscreen = () => <FullscreenButton variant="fullscreen" />;
