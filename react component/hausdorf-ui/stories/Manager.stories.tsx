import Manager from '../src/components/Manager';
import React from 'react';
import { StreamerNode } from '@videoforce/commons';
import { mockStreamerNode } from './mockUsers';

const availableStreamer: StreamerNode = mockStreamerNode(
  'vertical-video.mp4',
  'foo',
  'Иван Иванов',
);
const unavailableStreamer: StreamerNode = mockStreamerNode(
  'vertical-video.mp4',
  'foo',
  'Иван Иванов',
  'unavailable',
);

export default {
  title: 'Manager',
  component: Manager,
};

export const Default = () => (
  <div className="videochat">
    <div className="videochat__modal" id="ModalDialog">
      <div className="videochat__body">
        <Manager streamer={availableStreamer} disabledInfo  disabledRating/>
      </div>
    </div>
  </div>
);
export const Client = () => (
  <div className="videochat">
    <div className="videochat__modal" id="ModalDialog">
      <div className="videochat__body">
        <Manager streamer={unavailableStreamer}  disabledInfo  disabledRating/>
      </div>
    </div>
  </div>
);
export const Full = () => (
  <div className="videochat">
    <div className="videochat__modal" id="ModalDialog">
      <div className="videochat__body">
        <Manager streamer={availableStreamer} />
      </div>
    </div>
  </div>
);
