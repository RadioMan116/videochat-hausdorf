/* eslint-disable sort-imports */
import React from 'react';
import Manager from './Manager';
import ModalHeader from './ModalHeader';
const VideoChat = ({ streamers }) => {
    return (React.createElement("div", { className: "videochat" },
        React.createElement("div", { className: "videochat__modal", id: "ModalDialog" },
            React.createElement(ModalHeader, null),
            React.createElement("div", { className: "videochat__body" }, streamers.map((item) => {
                return (React.createElement(Manager, { key: item.user.userId, streamer: item, disabledInfo: true, disabledRating: true }));
            })))));
};
export default VideoChat;
//# sourceMappingURL=ManyManager.js.map