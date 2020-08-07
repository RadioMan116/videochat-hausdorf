import type { StreamerNode } from '@videoforce/commons';

export interface LobbyProps {
  streamers: StreamerNode[];
  openCall: (streamerId: string) => void;
  close?: () => void;
  connection?: boolean;
}
