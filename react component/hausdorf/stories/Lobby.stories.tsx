import { action } from '@storybook/addon-actions';
import { StreamerNode } from '@videoforce/commons';
import React from 'react';

import { Lobby } from '../src/ui/lobby';
import { mockStreamerNode } from './mockUsers';

const streamers: StreamerNode[] = [
  mockStreamerNode('vertical-video.mp4', 'foo1', 'Иван Козлачков'),
  mockStreamerNode(
    'vertical-video.mp4',
    'foo2',
    'Вася Васечкин',
    'unavailable',
  ),
  mockStreamerNode(
    'vertical-video.mp4',
    'foo3',
    'Нурмагомед Оглы-Назарбаев',
    'ready',
  ),
  mockStreamerNode('vertical-video.mp4', 'foo4', 'Чу Чуи'),
  mockStreamerNode('vertical-video.mp4', 'foo5', 'Иван Иванов'),
  mockStreamerNode('vertical-video.mp4', 'foo6', 'Ольга Голубева'),
  mockStreamerNode('vertical-video.mp4', 'foo6', 'Олег Голубев'),
  mockStreamerNode('vertical-video.mp4', 'foo6', 'Анна Сидорова'),
  mockStreamerNode('vertical-video.mp4', 'foo6', 'Виктор Виктор'),
  mockStreamerNode('vertical-video.mp4', 'foo6', 'Имя Забыл'),
  mockStreamerNode('vertical-video.mp4', 'foo6', 'Анна Каренина'),
  mockStreamerNode('vertical-video.mp4', 'foo6', 'Юрий Гагарин'),
];
export default {
  title: 'Lobby',
  component: Lobby,
};

export const Default = () => (
  <Lobby streamers={streamers} openCall={action('openCall')} />
);
export const Connection = () => (
  <Lobby streamers={streamers} openCall={action('openCall')} connection />
);
