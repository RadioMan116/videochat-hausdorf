import Video from '@videoforce/react/dist/Video';
import clsx from 'clsx';
import React from 'react';

import MiniIcon from '../components/icons/mini.svg';
import FullscreenButton from './FullscreenButton';
import { CallProps, CallVariant } from './types';
import useTimer from './useTimer';

interface Props extends CallProps {
  variant?: CallVariant;
  setVariant?: (variant: CallVariant) => void;
  manager?: boolean;
}

const CallView: React.FC<Props> = (props) => {
  const { manager, variant = 'modal', setVariant, peer } = props;

  return (
    <div className="videochat">
      <div
        className={clsx('videochat__modal widget', variant)}
        id="ModalDialog"
      >
        <div className="videochat__head" id="ModalHead">
          <div className="videochat__subject">Входящий звонок</div>

          <div className="videochat__fullscreen js-fullscreen">
            <FullscreenButton variant={variant} onToggle={setVariant} />
          </div>

          <div className="videochat__normal js-normal">
            <MiniIcon />
          </div>
        </div>

        <div className="videochat__body">
          <div className="videochat__widget">
            <div className="videochat__video call">
              <video
                muted
                autoPlay
                playsInline
                loop
                src={require('./connect.mp4')}
              />
            </div>

            <div className="videochat__control">
              <div className="videochat__reject">Отклонить</div>
              <div className="videochat__accept">Принять</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallView;
