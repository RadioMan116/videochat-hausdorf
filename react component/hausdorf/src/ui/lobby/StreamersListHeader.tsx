import React from 'react';

import CloseIcon from '../components/icons/close.svg';

interface Props {
  onClose?: () => void;
}

const StreamersListHeader: React.FC<Props> = ({ onClose }) => {
  return (
    <div className="videochat__head" id="ModalHead">
      <div className="videochat__head-title">Консультация с менеджером</div>

      <div className="videochat__head-subtitle">
        Мы Вас не будем видеть пока Вы не активируете камеру!
      </div>

      <div className="videochat__head-close" onClick={onClose}>
        <CloseIcon />
      </div>
    </div>
  );
};
export default StreamersListHeader;
