import useMediaStreamState from '@videoforce/react/dist/useMediaStreamState';
import React from 'react';

import Button from '../components/Button';
import CallEndIcon from '../components/icons/call-end.svg';
import CameraDisabledIcon from '../components/icons/camera-disabled.svg';
import CameraEnabledIcon from '../components/icons/camera-enabled.svg';
import CameraFlipIcon from '../components/icons/camera-flip.svg';
import MicDisabledIcon from '../components/icons/mic-disabled.svg';
import MicEnabledIcon from '../components/icons/mic-enabled.svg';
import ToggleButton from '../components/ToggleButton';
import { CallControlsProps } from './types';

const CallControls: React.FC<CallControlsProps> = (props) => {
  const {
    publisher,
    onToggleAudio,
    onToggleVideo,
    onEndCall,
    onToggleCamera,
  } = props;
  const streamState = useMediaStreamState(publisher?.stream);
  return (
    <div className="videochat__control">
      {onToggleCamera && (
        <Button
          className="videochat__change js-change"
          onClick={onToggleCamera}
        >
          <CameraFlipIcon />
        </Button>
      )}
      <ToggleButton
        enabled={streamState.video}
        IconEnabled={CameraEnabledIcon}
        IconDisabled={CameraDisabledIcon}
        onToggle={onToggleVideo}
      />
      <ToggleButton
        enabled={streamState.audio}
        IconEnabled={MicEnabledIcon}
        IconDisabled={MicDisabledIcon}
        onToggle={onToggleAudio}
      />
      <Button className="videochat__disconnect" onClick={onEndCall}>
        <CallEndIcon />
      </Button>
    </div>
  );
};

export default CallControls;
