/// <reference types="react" />
import { StreamerNode } from '@videoforce/commons';
interface Props {
    onClick?: () => void;
    streamer: StreamerNode;
    disabledInfo?: boolean;
    disabledRating?: boolean;
}
declare const Manager: ({ disabledInfo, disabledRating, streamer }: Props) => JSX.Element;
export default Manager;
