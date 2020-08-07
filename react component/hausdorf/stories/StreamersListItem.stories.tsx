import { action } from '@storybook/addon-actions';
import { StreamerNode } from '@videoforce/commons';
import React from 'react';

import StreamersListItem from '../src/ui/lobby/StreamersListItem';
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
  title: 'StreamersListItem',
  component: StreamersListItem,
};

export const Default = () => (
  <div className="videochat">
    <div className="videochat__modal" id="ModalDialog">
      <div className="videochat__body">
        <StreamersListItem
          streamer={availableStreamer}
          onClick={action('click')}
        />
      </div>
    </div>
  </div>
);

export const Client = () => (
  <div className="videochat">
    <div className="videochat__modal" id="ModalDialog">
      <div className="videochat__body">
        <StreamersListItem
          streamer={unavailableStreamer}
          onClick={action('click')}
        />
      </div>
    </div>
  </div>
);

export const Full = () => (
  <div className="videochat">
    <div className="videochat__modal" id="ModalDialog">
      <div className="videochat__body">
        <StreamersListItem
          streamer={availableStreamer}
          onClick={action('click')}
        />
      </div>
    </div>
  </div>
);
export const offline = () => (
  <div className="videochat">
    <div className="videochat__modal" id="ModalDialog">
      <div className="videochat__body">
        <div className="videochat__row offline">
          <a href="" className="videochat__link js-info ">
            <div className="videochat__img">
              <img src="img/manager-2.png" alt="" />
            </div>

            <div className="videochat__text">
              <div className="name">Сергеенко Ирина</div>
              <div className="status">Оффлайн</div>
            </div>
          </a>

          <a href="#" className="videochat__camera"></a>

          <a href="#" className="videochat__info js-info">
            <img src="img/information.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  </div>
);
