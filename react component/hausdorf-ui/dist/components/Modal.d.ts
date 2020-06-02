/// <reference types="react" />
import { StreamerNode } from '@videoforce/commons';
interface Props {
    fullscreen?: boolean;
    mini?: boolean;
    onClick?: () => void;
    streamer: StreamerNode;
}
declare const Modal: ({ streamer, fullscreen, mini }: Props) => JSX.Element;
export default Modal;
