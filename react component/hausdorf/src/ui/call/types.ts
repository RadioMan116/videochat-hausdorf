import type { StreamerNode, ViewerNode } from '@videoforce/commons';

export interface CallControlsProps {
  onToggleVideo?: (enabled?: boolean) => void;
  onToggleAudio?: (enabled?: boolean) => void;
  onEndCall?: () => void;
  onToggleCamera?: () => void;
  publisher?: ViewerNode;
}

export interface CallProps extends CallControlsProps {
  peer?: StreamerNode;
}

export type CallVariant = 'modal' | 'fullscreen' | 'mini';
