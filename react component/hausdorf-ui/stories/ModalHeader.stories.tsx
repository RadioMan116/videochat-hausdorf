import ModalHeader from '../src/components/ModalHeader';
import React from 'react';

export default {
  title: 'ModalHeader',
  component: ModalHeader,
};

export const Default = () => {
  return (
    <div className="videochat">
      <div className="videochat__modal" id="ModalDialog">
        <ModalHeader />
      </div>
    </div>
  );
};
