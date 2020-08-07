import { StreamerNode } from '@videoforce/commons';
import React from 'react';

import * as ui from './ui';

interface Props {
  streamers: StreamerNode[];
  openCall: (streamerId: string) => void;
  close: () => void;
}

const Lobby: React.FC<Props> = ({ openCall, streamers, close }) => {
  return <ui.Lobby openCall={openCall} streamers={streamers} close={close} />;
};

export default Lobby;
