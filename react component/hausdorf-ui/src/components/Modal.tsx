/* eslint-disable sort-imports */
import React from 'react';
import clsx from 'clsx';
import Buttons from './Buttons';
import { StreamerNode } from '@videoforce/commons';
import Video from '@videoforce/react/dist/Video';

interface Props {
  fullscreen?: boolean;
  mini?: boolean;
  onClick?: () => void;
  streamer: StreamerNode;
}

const Modal = ({ streamer, fullscreen, mini }: Props) => {
  return (
    <div className="videochat">
      <div
        className={clsx('videochat__modal widget', { fullscreen, mini })}
        id="ModalDialog"
      >
        <div className="videochat__head" id="ModalHead">
          <div className="videochat__subject">
            Конференция с менеджером Hausdorf
          </div>

          <div className="videochat__desc">
            {/* <div className="videochat__img">

            </div> */}

            <div className="videochat__name">Мальцев Иван</div>

            <div className="videochat__time">24:57</div>
          </div>

          <a href="#" className="videochat__fullscreen js-fullscreen">
            {/* <img src="img/fullscreen.svg" alt="" className="fullscreen" />
            <img
              src="img/filscreen-off.svg"
              alt=""
              className="fullscreen-off"
            /> */}
            {fullscreen ? (
              <svg width="16px" height="17px" viewBox="0 0 16 17">
                <path
                  d="M12.4152 4.99925L15.0002 5.00025C15.5522 5.00025 16.0002 5.44825 16.0002 6.00125C15.9993 6.55325 15.5513 7.00025 15.0002 7.00025L14.9993 7.00025L10.0243 6.99725C9.47425 6.99725 9.02725 6.55225 9.02425 6.00225L9.00025 1.00525C8.99725 0.45325 9.44225 0.00325 9.99525 0.00025L10.0002 0.00025C10.5503 0.00025 10.9972 0.44425 11.0002 0.99525L11.0122 3.57325L14.2922 0.29325C14.6832 -0.09775 15.3162 -0.09775 15.7072 0.29325C16.0972 0.68425 16.0972 1.31625 15.7072 1.70725L12.4152 4.99925ZM1.00425 9.00065L6.00125 9.02565C6.55125 9.02865 6.99625 9.47465 6.99625 10.0247L7.00025 14.9997C7.00025 15.5517 6.55225 16.0007 6.00025 16.0007C5.44725 16.0007 5.00025 15.5527 5.00025 15.0017L4.99825 12.4167L1.70725 15.7077C1.51125 15.9027 1.25525 16.0007 1.00025 16.0007C0.74425 16.0007 0.48825 15.9027 0.29325 15.7077C-0.09775 15.3167 -0.09775 14.6837 0.29325 14.2937L3.57225 11.0137L0.99525 11.0007C0.44225 10.9977 -0.00275 10.5466 0.00025 9.99565C0.00225 9.44465 0.45025 9.00065 1.00025 9.00065L1.00425 9.00065Z"
                  id="filscreen-off"
                  fill="#FFFFFF"
                  fillRule="evenodd"
                  stroke="none"
                />
              </svg>
            ) : (
              <svg width="16px" height="16px" viewBox="0 0 16 16">
                <path
                  d="M15.002 0.025C15.552 0.028 15.997 0.474 15.997 1.024L16 5.999C16.001 6.551 15.553 7 15.001 7L15 7C14.448 7 14.001 6.552 14 6.001L13.998 3.416L10.707 6.707C10.512 6.902 10.256 7 10 7C9.74502 7 9.48901 6.902 9.29301 6.707C8.90302 6.316 8.90302 5.683 9.29301 5.293L12.573 2.013L9.99601 2C9.44302 1.997 8.99701 1.546 9.00002 0.995C9.00302 0.444 9.45102 0 10 0L10.005 0L15.002 0.025ZM5.29302 9.29252C5.68402 8.90152 6.31602 8.90152 6.70702 9.29252C7.09801 9.68352 7.09801 10.3155 6.70702 10.7065L3.41502 13.9985L6.00001 13.9995C6.55301 13.9995 7.00002 14.4475 7.00002 15.0005C6.99901 15.5525 6.55202 15.9995 6.00001 15.9995L5.99902 15.9995L1.02402 15.9965C0.474015 15.9965 0.028015 15.5515 0.025015 15.0015L1.50462e-05 10.0045C-0.00298495 9.45252 0.443015 9.00252 0.995015 8.99952L1.00002 8.99952C1.55002 8.99952 1.99702 9.44352 2.00002 9.99452L2.01302 12.5725L5.29302 9.29252Z"
                  id="fullscreen"
                  fill="#FFFFFF"
                  fillRule="evenodd"
                  stroke="none"
                />
              </svg>
            )}
          </a>

          <a href="#" className="videochat__normal js-normal">
            <svg width="20px" height="20px" viewBox="0 0 20 20">
              <path
                d="M15.401 0L2.59998 0C1.16698 0 0.000976563 1.246 0.000976563 2.777L0.000976563 3.95484Q0 3.97691 0 3.999L0 8.001Q0 8.09939 0.0191955 8.19589Q0.038391 8.2924 0.0760443 8.3833Q0.113698 8.4742 0.168362 8.55601Q0.223026 8.63783 0.2926 8.7074Q0.362175 8.77697 0.443985 8.83164Q0.525796 8.8863 0.616699 8.92395Q0.707602 8.96161 0.804105 8.9808Q0.900607 9 0.999 9L1.001 9Q1.09939 9 1.1959 8.9808Q1.2924 8.96161 1.3833 8.92395Q1.4742 8.8863 1.55601 8.83164Q1.63783 8.77697 1.7074 8.7074Q1.77697 8.63783 1.83164 8.55601Q1.8863 8.4742 1.92396 8.3833Q1.96161 8.2924 1.9808 8.19589Q2 8.09939 2 8.001L2 4.04464C2.00065 4.02984 2.00098 4.01496 2.00098 4L2.00098 2.777C2.00098 2.356 2.27498 2 2.59998 2L15.401 2C15.726 2 16.001 2.356 16.001 2.777L16.001 15.223C16.001 15.644 15.726 16 15.401 16L9.999 16Q9.90061 16 9.8041 16.0192Q9.7076 16.0384 9.6167 16.076Q9.52579 16.1137 9.44398 16.1684Q9.36217 16.223 9.2926 16.2926Q9.22303 16.3622 9.16836 16.444Q9.1137 16.5258 9.07604 16.6167Q9.03839 16.7076 9.01919 16.8041Q9 16.9006 9 16.999L9 17.001Q9 17.0994 9.01919 17.1959Q9.03839 17.2924 9.07604 17.3833Q9.1137 17.4742 9.16836 17.556Q9.22303 17.6378 9.2926 17.7074Q9.36217 17.777 9.44398 17.8316Q9.52579 17.8863 9.6167 17.924Q9.7076 17.9616 9.8041 17.9808Q9.90061 18 9.999 18L15.401 18C16.835 18 18.001 16.754 18.001 15.223L18.001 2.777C18.001 1.246 16.835 0 15.401 0ZM5.29302 11.2933C5.68402 10.9023 6.31602 10.9023 6.70702 11.2933C7.09801 11.6842 7.09801 12.3162 6.70702 12.7072L3.41502 15.9993L6.00001 16.0002C6.55301 16.0002 7.00002 16.4482 7.00002 17.0012C6.99901 17.5532 6.55202 18.0002 6.00001 18.0002L5.99902 18.0002L1.02402 17.9972C0.474015 17.9972 0.028015 17.5522 0.025015 17.0023L1.50462e-05 12.0052C-0.00298495 11.4532 0.443015 11.0033 0.995015 11.0002L1.00002 11.0002C1.55002 11.0002 1.99702 11.4443 2.00002 11.9952L2.01302 14.5732L5.29302 11.2933Z"
                transform="matrix(1 0 0 -1 0.5 18.50049)"
                id="normal-size"
                fill="#FFFFFF"
                fillRule="evenodd"
                stroke="none"
              />
            </svg>
          </a>
        </div>

        <div className="videochat__body">
          <div className="videochat__widget">
            <div className="videochat__video">
              <Video muted node={streamer} />
            </div>

            <div className="videochat__miniature">
              <Video muted node={streamer} />
            </div>
            <Buttons />
            {/* <div className="videochat__control">
              <a href="#" className="videochat__change js-change"></a>

              <a href="#" className="videochat__micro js-micro"></a>

              <a href="#" className="videochat__toggle js-toggle"></a>

              <a href="#" className="videochat__disconnect"></a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
