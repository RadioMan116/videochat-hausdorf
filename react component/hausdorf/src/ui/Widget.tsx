import { UseWidgetHook } from '@videoforce/react/dist/useWidget';
import React from 'react';

import { WidgetProps } from './types';

export const Widget: React.FC<WidgetProps & UseWidgetHook> = (props) => {
  const {
    callView,
    lobbyView,
    ctaView,
    close,
    openCall,
    openLobby,
    state,
    streamerId,
  } = props;
  return (
    <React.Fragment>
      {state === 'closed' &&
        React.cloneElement(ctaView, {
          openLobby: openLobby,
          openCall: openCall,
        })}
      {state === 'lobby' && React.cloneElement(lobbyView, { openCall, close })}
      {state === 'call' &&
        React.cloneElement(callView, { streamerId, onEndCall: openLobby })}
    </React.Fragment>
  );
};
