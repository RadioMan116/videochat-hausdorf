import React from 'react';

export interface LobbyElementProps {
  openCall: (streamerId: string) => void;
  close: () => void;
}

export interface CallElementProps {
  streamerId: string;
  onEndCall: () => void;
}

export interface CtaElementProps {
  openLobby: () => void;
  openCall: (streamerId: string) => void;
}

export interface WidgetProps {
  lobbyView: React.ReactElement<LobbyElementProps>;
  callView: React.ReactElement<CallElementProps>;
  ctaView: React.ReactElement<CtaElementProps>;
}
