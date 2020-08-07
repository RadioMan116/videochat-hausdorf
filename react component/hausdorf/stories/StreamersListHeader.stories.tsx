import React from 'react';

import StreamersListHeader from '../src/ui/lobby/StreamersListHeader';

export default {
  title: 'StreamersListHeader',
  component: StreamersListHeader,
};

export const Default = () => {
  return (
    <div className="videochat">
      <div className="videochat__modal" id="ModalDialog">
        <StreamersListHeader />
      </div>
    </div>
  );
};
