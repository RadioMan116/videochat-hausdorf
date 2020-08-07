import { StreamerNode } from '@videoforce/commons';
import clsx from 'clsx';
import React, { useCallback } from 'react';

import StreamerAvatar from './StreamerAvatar';
import StreamerCameraIcon from './StreamerCameraIcon';
import StreamerInfo from './StreamerInfo';
import StreamerRating from './StreamerRating';

interface Props {
  onClick: (streamerId: string) => void;
  streamer: StreamerNode;
  disableInfo?: boolean;
  disableRating?: boolean;
}

const StreamersListItem: React.FC<Props> = (props) => {
  const { onClick, disableInfo = true, disableRating = true, streamer } = props;
  const isAvailable = streamer.status !== 'unavailable';
  const handleClick = useCallback(() => {
    onClick(streamer.user.userId);
  }, [streamer, onClick]);
  return (
    <div className={clsx('videochat__row', isAvailable ? 'online' : 'client')}>
      <StreamerAvatar streamer={streamer} />
      {!disableRating && <StreamerRating />}
      <StreamerCameraIcon onClick={handleClick} />
      {!disableInfo && <StreamerInfo />}
    </div>
  );
};

export default StreamersListItem;
