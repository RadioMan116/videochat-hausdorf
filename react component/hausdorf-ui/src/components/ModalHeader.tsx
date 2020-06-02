import React from 'react';

const ModalHeader = () => {
  return (
    <div className="videochat__head" id="ModalHead">
      <div className="videochat__head-title">Консультация с менеджером</div>

      <div className="videochat__head-subtitle">
        Мы Вас не будем видеть пока Вы не активируете камеру!
      </div>

      <div className="videochat__head-close">
        <svg width="16px" height="16px" viewBox="0 0 16 16">
          <g id="icon/close">
            <path
              d="M0.353553 0.353553L10.3536 10.3536M10.3536 0.353553L0.353555 10.3536"
              transform="translate(2.646447 2.646447)"
              id="Combined-Shape"
              fill="none"
              stroke="#A5A5A6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};
export default ModalHeader;
