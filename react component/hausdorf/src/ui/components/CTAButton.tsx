import clsx from 'clsx';
import React from 'react';

import CameraIcon from '../components/icons/camera-enabled.svg';
import LogoIcon from '../components/icons/logo.svg';

interface Props {
  vertical?: boolean;
  openLobby?: () => void;
}

export const CTAButton = ({ vertical, openLobby }: Props) => {
  return (
    <div
      className={clsx('videochat__button', { vertical })}
      onClick={openLobby}
    >
      <CameraIcon />
      <LogoIcon id="logo" />
      <span className="videochat__button-text">Видео-чат</span>
    </div>
  );
};
