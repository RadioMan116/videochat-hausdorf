"use strict";
// import { ModalState, WidgetHook } from './useWidget';
// import { CSSTransition } from 'react-transition-group';
// // import { Modal } from './components/modal';
// import React from 'react';
// import { WidgetProps } from './types';
// export const Widget: React.FC<WidgetProps & WidgetHook> = (props) => {
//   const {
//     callView,
//     lobbyView,
//     ctaView,
//     close,
//     openCall,
//     openLobby,
//     state,
//     streamerId,
//     children,
//   } = props;
//   const isOpen = state !== ModalState.CLOSED;
//   return (
//     <React.Fragment>
//       <CSSTransition
//         in={isOpen}
//         timeout={200}
//         classNames="wg-modal-transition"
//         unmountOnExit
//       >
//         {/* <Modal close={close}>
//           {streamerId &&
//             !!callView &&
//             React.cloneElement(callView, { streamerId, onEndCall: openLobby })}
//           {!streamerId &&
//             !!lobbyView &&
//             React.cloneElement(lobbyView, {
//               openCall,
//             })}
//           {children}
//         </Modal> */}
//       </CSSTransition>
//       {!isOpen &&
//         !!ctaView &&
//         React.cloneElement(ctaView, {
//           openLobby: openLobby,
//           openCall: openCall,
//         })}
//     </React.Fragment>
//   );
// };
//# sourceMappingURL=Widget.js.map