import * as ui from '@videoforce/marktstein-ui';

import React, { useMemo } from 'react';

import { StreamerNode } from '@videoforce/commons';

interface Props {
  openLobby: () => void;
  openCall: (streamerId: string) => void;
  streamers: StreamerNode[];
}

const Miniature: React.FC<Props> = ({ openCall, openLobby, streamers }) => {
  const bestStreamer = useMemo(
    () => streamers.find((s) => s.status !== 'unavailable') || streamers[0],
    [streamers],
  );
  return (
    <ui.Miniature
      openCall={openCall}
      openLobby={openLobby}
      streamer={bestStreamer}
    />
  );
};

export default Miniature;
