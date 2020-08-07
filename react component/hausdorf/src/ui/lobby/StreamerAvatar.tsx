import { StreamerNode } from '@videoforce/commons';
import Video from '@videoforce/react/dist/Video';
import React from 'react';

interface Props {
  streamer: StreamerNode;
}

const StreamerAvatar: React.FC<Props> = ({ streamer }) => {
  const isAvailable = streamer.status !== 'unavailable';
  return (
    <div className="videochat__link js-info">
      <div className="videochat__img">
        <Video muted node={streamer} />
      </div>

      <div className="videochat__text">
        <div className="name">{streamer.user.name}</div>

        <div className="status">
          {isAvailable ? 'Сейчас онлайн' : 'В разговоре с клиентом'}
        </div>
      </div>
    </div>
  );
};

export default StreamerAvatar;
