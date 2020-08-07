import { User, Viewer } from '@videoforce/commons';
import { useWidget } from '@videoforce/react/dist/useWidget';
import { useViewersLobby } from '@videoforce/use-openvidu';
import React from 'react';

import Call from './Call';
import Lobby from './Lobby';
import * as ui from './ui';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

interface Props {
  site: string;
}

const user: User = { userId: 'viewer', role: 'viewer' };

const Widget: React.FC<Props> = ({ site }) => {
  const widget = useWidget();

  const { streamers, loading } = useViewersLobby(
    site,
    user as Viewer,
    widget.state !== 'closed',
  );
  if (loading) {
    return null;
  }
  return (
    <ui.Widget
      {...widget}
      lobbyView={<Lobby openCall={noop} close={noop} streamers={streamers} />}
      callView={<Call user={user} onEndCall={noop} streamerId="" />}
      ctaView={<ui.CTAButton />}
    />
  );
};

export default Widget;
