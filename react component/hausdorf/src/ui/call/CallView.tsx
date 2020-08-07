import Video from '@videoforce/react/dist/Video';
import clsx from 'clsx';
import React from 'react';

import MiniIcon from '../components/icons/mini.svg';
import CallControls from './CallControls';
import FullscreenButton from './FullscreenButton';
import { CallProps, CallVariant } from './types';
import useTimer from './useTimer';

interface Props extends CallProps {
  variant?: CallVariant;
  setVariant?: (variant: CallVariant) => void;
}

const CallView: React.FC<Props> = (props) => {
  const { variant = 'modal', setVariant, publisher, peer, ...controls } = props;
  const isConnecting = peer?.status !== 'ready';
  const timer = useTimer();
  return (
    <div className="videochat">
      <div
        className={clsx('videochat__modal widget', variant)}
        id="ModalDialog"
      >
        <div className="videochat__head" id="ModalHead">
          <div className="videochat__subject">Звонок менеджеру Hausdorf</div>

          <div className="videochat__desc">
            <div className="videochat__name">{peer?.user.name}</div>

            <div className="videochat__time">{timer}</div>
          </div>

          <div className="videochat__fullscreen js-fullscreen">
            <FullscreenButton variant={variant} onToggle={setVariant} />
          </div>

          <div className="videochat__normal js-normal">
            <MiniIcon />
          </div>
        </div>

        <div className="videochat__body">
          <div className="videochat__widget">
            <div className={clsx('videochat__video', { call: isConnecting })}>
              {isConnecting ? (
                <video
                  muted
                  autoPlay
                  playsInline
                  loop
                  src={require('./connect.mp4')}
                />
              ) : (
                <Video muted node={peer} />
              )}
            </div>

            <div className="videochat__miniature">
              <Video muted node={publisher} />
            </div>
            <CallControls {...controls} publisher={publisher} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallView;
