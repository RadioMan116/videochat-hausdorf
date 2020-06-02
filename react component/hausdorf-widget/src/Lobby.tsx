import * as ui from '@videoforce/marktstein-ui';

import React from 'react';
import { StreamerNode } from '@videoforce/commons';

interface Props {
  streamers: StreamerNode[];
  openCall: (streamerId: string) => void;
}

const Lobby: React.FC<Props> = ({ openCall, streamers }) => {
  return <ui.Lobby openCall={openCall} streamers={streamers} />;
};

export default Lobby;
