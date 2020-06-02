import ManyManager from '../src/components/ManyManager';
import React from 'react';
import { StreamerNode } from '@videoforce/commons';
import { mockStreamerNode } from './mockUsers';

const streamers: StreamerNode[] = [
  mockStreamerNode('vertical-video.mp4', 'foo1', 'Иван Иванов'),
  mockStreamerNode(
    'vertical-video.mp4',
    'foo2',
    'Евгений Смирнов',
    'unavailable',
  ),
  mockStreamerNode('vertical-video.mp4', 'foo3', 'Олег Голубев'),
  mockStreamerNode('vertical-video.mp4', 'foo4', 'Анна Васильева'),
  mockStreamerNode('vertical-video.mp4', 'foo5', 'Юлия Блинова'),
  mockStreamerNode('vertical-video.mp4', 'foo6', 'Виктор Цой'),
  mockStreamerNode('vertical-video.mp4', 'foo6', 'Виктор Цой'),
  mockStreamerNode('vertical-video.mp4', 'foo6', 'Виктор Цой'),
  mockStreamerNode('vertical-video.mp4', 'foo6', 'Виктор Цой'),
  mockStreamerNode('vertical-video.mp4', 'foo6', 'Виктор Цой'),
  mockStreamerNode('vertical-video.mp4', 'foo6', 'Виктор Цой'),
  mockStreamerNode('vertical-video.mp4', 'foo6', 'Виктор Цой'),
];
export default {
  title: 'ManyManager',
  component: ManyManager,
};

export const Default = () => <ManyManager streamers={streamers} />;
