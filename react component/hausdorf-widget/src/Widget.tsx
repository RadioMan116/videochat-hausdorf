import '@videoforce/marktstein-ui/dist/styles/index.css';

import * as ui from '@videoforce/marktstein-ui';

import { ModalState, useWidget } from '@videoforce/marktstein-ui';
import { User, Viewer } from '@videoforce/commons';

import Call from './Call';
import Lobby from './Lobby';
import Miniature from './Miniature';
import React from 'react';
import { useViewersLobby } from '@videoforce/use-openvidu';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

interface Props {
  site: string;
  user: User;
}

const Widget: React.FC<Props> = ({ user, site }) => {
  const widget = useWidget();

  const { streamers, loading } = useViewersLobby(
    site,
    user as Viewer,
    widget.state !== ModalState.CLOSED,
  );
  if (loading) {
    return null;
  }
  return (
    <ui.Widget
      {...widget}
      lobbyView={<Lobby openCall={noop} streamers={streamers} />}
      callView={<Call user={user} onEndCall={noop} streamerId="" />}
      ctaView={
        <Miniature openCall={noop} openLobby={noop} streamers={streamers} />
      }
    />
  );
};

export default Widget;
