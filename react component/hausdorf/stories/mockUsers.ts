import {
  Streamer,
  StreamerDevice,
  StreamerNode,
  VideoNode,
  Viewer,
  ViewerNode,
} from '@videoforce/commons';

export const mockStreamerNode = (
  src: string,
  id: string,
  name: string,
  status: VideoNode['status'] = 'ready',
): StreamerNode => {
  const user: Streamer = {
    role: 'streamer',
    device: StreamerDevice.DESKTOP,
    userId: id,
    name,
  };
  return {
    user,
    status,
    preview: {
      mp4: src,
    },
  };
};

export const mockViewerNode = (src: string): ViewerNode => {
  const user: Viewer = {
    role: 'viewer',
    userId: 'viewer',
  };
  return {
    status: 'ready',
    user,
    preview: {
      mp4: src,
    },
  };
};
