import Video from '@videoforce/react/dist/Video';
import clsx from 'clsx';
import React from 'react';

import CloseIcon from '../components/icons/close.svg';
import Disconnect from '../components/icons/hd-disconnect.svg';
import MiniIcon from '../components/icons/mini.svg';
import CallControls from './CallControls';
import FullscreenButton from './FullscreenButton';
import { CallProps, CallVariant } from './types';
import useTimer from './useTimer';
interface Props extends CallProps {
  variant?: CallVariant;
  setVariant?: (variant: CallVariant) => void;
  manager?: boolean;
}

const CallView: React.FC<Props> = (props) => {
  const {
    manager,
    variant = 'modal',
    setVariant,
    publisher,
    peer,
    ...controls
  } = props;
  const isConnecting = peer?.status !== 'ready';
  const timer = useTimer();
  return (
    <div className="videochat">
      <div
        className={clsx('videochat__modal widget', variant)}
        id="ModalDialog"
      >
        <div className="videochat__head" id="ModalHead">
          <div className="videochat__subject">
            {manager ? 'Входящий звонок с сайта' : 'Звонок менеджеру Hausdorf'}
          </div>
          {manager ? (
            ''
          ) : (
            <div className="videochat__desc">
              <div className="videochat__name">{peer?.user.name}</div>
            </div>
          )}

          <div className="videochat__head-close">
            <CloseIcon />
          </div>

          <div className="videochat__normal js-normal">
            <MiniIcon />
          </div>
        </div>

        <div className="videochat__body">
          <div className="videochat__widget">
            <div className="videochat__video">
              <div className="videochat__error">
                <Disconnect />

                {manager
                  ? 'Входящий звонок отклонен'
                  : '  Менеджер отклонил звонок'}
              </div>
            </div>
            {manager ? (
              ''
            ) : (
              <div className="videochat__control">
                <div className="videochat__boss">Пожаловаться руководству</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallView;
