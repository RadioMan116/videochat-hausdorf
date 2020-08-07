import React, { useCallback } from 'react';

import FullscreenOffIcon from '../components/icons/fullscreen-off.svg';
import FullscreenOnIcon from '../components/icons/fullscreen-on.svg';
import { CallVariant } from './types';

interface Props {
  variant?: CallVariant;
  onToggle?: (variant: CallVariant) => void;
}

const FullscreenButton: React.FC<Props> = ({ variant, onToggle }) => {
  const handleClick = useCallback(() => {
    onToggle?.(variant === 'fullscreen' ? 'modal' : 'fullscreen');
  }, [variant, onToggle]);
  if (variant === 'mini') {
    return null;
  }

  return (
    <div onClick={handleClick}>
      {variant === 'fullscreen' ? <FullscreenOffIcon /> : <FullscreenOnIcon />}
    </div>
  );
};

export default FullscreenButton;
