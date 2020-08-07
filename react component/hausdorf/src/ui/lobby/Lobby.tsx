import clsx from 'clsx';
import React from 'react';

import StreamersListHeader from './StreamersListHeader';
import StreamersListItem from './StreamersListItem';
import { LobbyProps } from './types';

export const Lobby: React.FC<LobbyProps> = (props) => {
  const { streamers, openCall, close, connection } = props;
  return (
    <div className="videochat">
      <div className="videochat__modal" id="ModalDialog">
        <StreamersListHeader onClose={close} />
        <div className={clsx('videochat__body', { connection })}>
          {connection ? (
            <div className="videochat__ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div className="videochat__ring-text">
                Загрузка списка менеджеров
              </div>
            </div>
          ) : (
            ''
          )}
          {streamers.map((item) => {
            return (
              <StreamersListItem
                key={item.user.userId}
                streamer={item}
                onClick={openCall}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

Lobby.displayName = 'ui.Lobby';
