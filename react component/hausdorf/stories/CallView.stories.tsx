import React from 'react';

import CallView from '../src/ui/call/CallView';
import CallViewError from '../src/ui/call/CallViewError';
import CallViewVariables from '../src/ui/call/CallViewVariables';
import { mockStreamerNode, mockViewerNode } from './mockUsers';

export default {
  title: 'CallView',
  component: CallView,
};
const viewer = mockViewerNode('vertical-video.mp4');
const streamer = mockStreamerNode(
  'horizontal-video.mp4',
  'foo',
  'Анна Каренина',
  'ready',
);
const streamerConnecting = mockStreamerNode(
  'horizontal-video.mp4',
  'foo',
  'Анна Каренина',
  'unavailable',
);

export const Modal = () => <CallView publisher={viewer} peer={streamer} />;
export const Connecting = () => (
  <CallView publisher={viewer} peer={streamerConnecting} />
);

export const Fullscreen = () => (
  <CallView variant="fullscreen" publisher={viewer} peer={streamer} />
);

export const Mini = () => (
  <CallView variant="mini" publisher={viewer} peer={streamer} />
);
export const ConnectingManager = () => (
  <CallViewVariables publisher={viewer} peer={streamerConnecting} />
);
export const DisconnectClient = () => (
  <CallViewError publisher={viewer} peer={streamer} />
);
export const DisconnectManager = () => (
  <CallViewError publisher={viewer} peer={streamer} manager={true} />
);
