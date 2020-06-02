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
    identityId: id,
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

export const mockViewerNode = (src: string, id: string): ViewerNode => {
  const user: Viewer = {
    role: 'viewer',
    identityId: id,
  };
  return {
    status: 'ready',
    user,
    preview: {
      mp4: src,
    },
  };
};
