/// <reference types="react" />
import { StreamerNode } from '@videoforce/commons';
interface Props {
    client?: boolean;
    onClick?: () => void;
    streamers: StreamerNode[];
}
declare const VideoChat: ({ streamers }: Props) => JSX.Element;
export default VideoChat;
