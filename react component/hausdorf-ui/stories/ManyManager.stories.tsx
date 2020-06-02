import ManyManager from '../src/components/ManyManager';
import React from 'react';
import { StreamerNode } from '@videoforce/commons';
import { mockStreamerNode } from './mockUsers';

const streamers: StreamerNode[] = [
  mockStreamerNode('vertical-video.mp4', 'foo1', '���� ������'),
  mockStreamerNode(
    'vertical-video.mp4',
    'foo2',
    '������� �������',
    'unavailable',
  ),
  mockStreamerNode('vertical-video.mp4', 'foo3', '���� �������'),
  mockStreamerNode('vertical-video.mp4', 'foo4', '���� ���������'),
  mockStreamerNode('vertical-video.mp4', 'foo5', '���� �������'),
  mockStreamerNode('vertical-video.mp4', 'foo6', '������ ���'),
  mockStreamerNode('vertical-video.mp4', 'foo6', '������ ���'),
  mockStreamerNode('vertical-video.mp4', 'foo6', '������ ���'),
  mockStreamerNode('vertical-video.mp4', 'foo6', '������ ���'),
  mockStreamerNode('vertical-video.mp4', 'foo6', '������ ���'),
  mockStreamerNode('vertical-video.mp4', 'foo6', '������ ���'),
  mockStreamerNode('vertical-video.mp4', 'foo6', '������ ���'),
];
export default {
  title: 'ManyManager',
  component: ManyManager,
};

export const Default = () => <ManyManager streamers={streamers} />;
