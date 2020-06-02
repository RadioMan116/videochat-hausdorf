import * as ui from '@videoforce/marktstein-ui';

import { User, Viewer } from '@videoforce/commons';

import React from 'react';
import { useViewersCall } from '@videoforce/use-openvidu';

interface Props {
  user: User;
  streamerId: string;
  onEndCall: () => void;
}

const Call: React.FC<Props> = ({ user, streamerId, onEndCall }) => {
  const {
    toggleAudio,
    toggleVideo,
    publisher,
    streamer,
    toggleCamera,
  } = useViewersCall(user as Viewer, streamerId);
  return (
    <ui.Call
      onEndCall={onEndCall}
      onToggleAudio={toggleAudio}
      onToggleCamera={toggleCamera}
      onToggleVideo={toggleVideo}
      peer={streamer}
      publisher={publisher}
    />
  );
};

export default Call;
