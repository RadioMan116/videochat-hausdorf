/* eslint-disable sort-imports */
import React from 'react';
import clsx from 'clsx';
import Manager from './Manager';
import ModalHeader from './ModalHeader';
import { StreamerNode } from '@videoforce/commons';

// import Video from '@videoforce/react/dist/Video';
interface Props {
  client?: boolean;
  onClick?: () => void;
  streamers: StreamerNode[];
}

const VideoChat = ({ streamers }: Props) => {
  return (
    <div className="videochat">
      <div className="videochat__modal" id="ModalDialog">
        <ModalHeader />
        <div className="videochat__body">
          {streamers.map((item) => {
            return (
              <Manager
                key={item.user.userId}
                streamer={item}
                disabledInfo
                disabledRating
              />
            );
          })}
          {/* <Manager />
          <Manager client />
          <Manager />
          <Manager client />
          <Manager />
          <Manager client />
          <Manager />
          <Manager client />
          <Manager />
          <Manager client />
          <Manager />
          <Manager client />
          <Manager />
          <Manager client />
          <Manager />
          <Manager client />
          <Manager />
          <Manager client />
          <Manager />
          <Manager client /> */}
        </div>
      </div>
    </div>
  );
};

export default VideoChat;
