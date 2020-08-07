import React from 'react';

import CameraIcon from '../components/icons/camera-enabled.svg';

interface Props {
  onClick: () => void;
}

const StreamerCameraIcon: React.FC<Props> = ({ onClick }) => {
  return (
    <div className="videochat__camera" onClick={onClick}>
      <CameraIcon />
    </div>
  );
};

export default StreamerCameraIcon;
