import Modal from '../src/components/Modal';
import React from 'react';
import { StreamerNode } from '@videoforce/commons';
import { mockStreamerNode } from './mockUsers';

export default {
  title: 'Modal',
  component: Modal,
};
const availableStreamer: StreamerNode = mockStreamerNode(
  'vertical-video.mp4',
  'foo',
  'Иван Иванов',
);
const unavailableStreamer: StreamerNode = mockStreamerNode(
  'horizontal-video.mp4',
  'foo',
  'Иван Иванов',
  'unavailable',
);

export const Default = () => <Modal streamer={unavailableStreamer} />;
export const Fullscreen = () => (
  <Modal fullscreen streamer={unavailableStreamer} />
);
export const Mini = () => <Modal mini streamer={unavailableStreamer} />;
