import { action } from '@storybook/addon-actions';
import React from 'react';

import CameraDisabledIcon from '../src/ui/components/icons/camera-disabled.svg';
import CameraEnabledIcon from '../src/ui/components/icons/camera-enabled.svg';
import MicDisabledIcon from '../src/ui/components/icons/mic-disabled.svg';
import MicEnabledIcon from '../src/ui/components/icons/mic-enabled.svg';
import ToggleButton from '../src/ui/components/ToggleButton';

export default {
  title: 'ToggleButton',
  component: ToggleButton,
  decorators: [
    (storyFn: any) => <div className="videochat__control">{storyFn()}</div>,
  ],
};

export const CameraEnabled = () => (
  <ToggleButton
    enabled
    IconEnabled={CameraEnabledIcon}
    IconDisabled={CameraDisabledIcon}
    onToggle={action('toggle')}
  />
);

export const CameraDisabled = () => (
  <ToggleButton
    enabled={false}
    IconEnabled={CameraEnabledIcon}
    IconDisabled={CameraDisabledIcon}
    onToggle={action('toggle')}
  />
);

export const MicEnabled = () => (
  <ToggleButton
    enabled
    IconEnabled={MicEnabledIcon}
    IconDisabled={MicDisabledIcon}
    onToggle={action('toggle')}
  />
);

export const MicDisabled = () => (
  <ToggleButton
    enabled={false}
    IconEnabled={MicEnabledIcon}
    IconDisabled={MicDisabledIcon}
    onToggle={action('toggle')}
  />
);
