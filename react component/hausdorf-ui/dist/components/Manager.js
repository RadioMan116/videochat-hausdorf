import React from 'react';
import clsx from 'clsx';
import Video from '@videoforce/react/dist/Video';
const Manager = ({ disabledInfo, disabledRating, streamer }) => {
    const client = streamer.status === 'unavailable';
    return (React.createElement("div", { className: clsx('videochat__row', client ? 'client' : 'online') },
        React.createElement("a", { href: "", className: "videochat__link js-info" },
            React.createElement("div", { className: "videochat__img" },
                React.createElement(Video, { muted: true, node: streamer })),
            React.createElement("div", { className: "videochat__text" },
                React.createElement("div", { className: "name" }, "\u041C\u0430\u043B\u044C\u0446\u0435\u0432 \u0418\u0432\u0430\u043D"),
                React.createElement("div", { className: "status" }))),
        disabledRating ? ('') : (React.createElement("div", { className: "videochat__rating" },
            React.createElement("div", { className: "number" }, "4,5"),
            React.createElement("div", { className: "star" },
                React.createElement("svg", { width: "10px", height: "10px", viewBox: "0 0 10 10" },
                    React.createElement("g", { id: "icon/star-active" },
                        React.createElement("path", { d: "M9.56491 3.40933L6.81108 3.13525C6.63748 3.11864 6.48747 3.00237 6.41653 2.82796L5.43017 0.311449C5.27235 -0.103816 4.71202 -0.103816 4.55421 0.311449L3.57574 2.82796C3.51261 3.00237 3.35479 3.11864 3.18119 3.13525L0.427275 3.40933C0.0169494 3.45085 -0.148759 3.9907 0.158985 4.28139L2.23429 6.19991C2.36843 6.32449 2.42367 6.50721 2.38421 6.68992L1.76083 9.38076C1.66614 9.80441 2.10014 10.1532 2.46312 9.92899L4.75937 8.5087C4.9093 8.41735 5.09079 8.41735 5.24071 8.5087L7.53704 9.92899C7.90002 10.1532 8.33402 9.81272 8.23925 9.38076L7.62376 6.68992C7.5843 6.50721 7.63954 6.32449 7.77368 6.19991L9.84899 4.28139C10.1488 3.9907 9.97524 3.45085 9.56491 3.40933Z", id: "enable", fill: "#DD0016", stroke: "none" })))))),
        React.createElement("a", { href: "#", className: "videochat__camera" },
            React.createElement("svg", { width: "32px", height: "32px", viewBox: "0 0 32 32" },
                React.createElement("defs", null,
                    React.createElement("path", { d: "M19.012 2.146C18.386 1.874 17.66 1.992 17.161 2.452L15 4.452L15 3C15 1.346 13.655 0 12 0L3 0C1.346 0 0 1.346 0 3L0 11C0 12.655 1.346 14 3 14L12 14C13.655 14 15 12.655 15 11L15 9.549L17.161 11.548C17.482 11.845 17.897 12 18.32 12C18.553 12 18.788 11.953 19.012 11.855C19.621 11.589 20 11.02 20 10.371L20 3.63C20 2.981 19.621 2.412 19.012 2.146", transform: "translate(6 9)", id: "path_1" }),
                    React.createElement("clipPath", { id: "mask_1" })),
                React.createElement("g", { id: "icon/video-c" },
                    React.createElement("path", { d: "M19.012 2.146C18.386 1.874 17.66 1.992 17.161 2.452L15 4.452L15 3C15 1.346 13.655 0 12 0L3 0C1.346 0 0 1.346 0 3L0 11C0 12.655 1.346 14 3 14L12 14C13.655 14 15 12.655 15 11L15 9.549L17.161 11.548C17.482 11.845 17.897 12 18.32 12C18.553 12 18.788 11.953 19.012 11.855C19.621 11.589 20 11.02 20 10.371L20 3.63C20 2.981 19.621 2.412 19.012 2.146", transform: "translate(6 9)", id: "\u00F0\u0178\u017D\u00A8-Icon-\u00D0\u00A1olor", fill: "#6C6C6C", stroke: "none" })))),
        disabledInfo ? ('') : (React.createElement("a", { href: "#", className: "videochat__info js-info" },
            React.createElement("svg", { width: "16px", height: "16px", viewBox: "0 0 16 16", version: "1.1" },
                React.createElement("g", { id: "information" },
                    React.createElement("path", { d: "M8 16C3.57143 16 0 12.4286 0 8C0 3.57143 3.57143 0 8 0C12.4286 0 16 3.57143 16 8C16 12.4286 12.4286 16 8 16ZM14.5 8C14.5 11.5982 11.5982 14.5 8 14.5C4.40179 14.5 1.5 11.5982 1.5 8C1.5 4.40179 4.40179 1.5 8 1.5C11.5982 1.5 14.5 4.40179 14.5 8ZM8 6C7.3125 6 6.75 5.4375 6.75 4.75C6.75 4.0625 7.3125 3.5 8 3.5C8.6875 3.5 9.25 4.0625 9.25 4.75C9.25 5.4375 8.6875 6 8 6ZM8.48722 7L6.73252 7C6.59053 7 6.51982 7.01857 6.45463 7.05343C6.38945 7.08829 6.33829 7.13945 6.30343 7.20463C6.26857 7.26982 6.25 7.34053 6.25 7.48252L6.25 7.78609C6.25 7.9022 6.25959 7.94438 6.27879 7.98847C6.29798 8.03256 6.32677 8.06908 6.36517 8.09803C6.40356 8.12699 6.44234 8.14616 6.55524 8.17326L7.09301 8.30232C7.24355 8.33845 7.29525 8.36402 7.34645 8.40262C7.39764 8.44122 7.43603 8.48992 7.46162 8.5487C7.48721 8.60749 7.5 8.66374 7.5 8.81855L7.5 10.6815C7.5 10.8363 7.48721 10.8925 7.46162 10.9513C7.43603 11.0101 7.39764 11.0588 7.34645 11.0974C7.29525 11.136 7.24355 11.1615 7.09301 11.1977L6.55524 11.3267C6.44234 11.3538 6.40356 11.373 6.36517 11.402C6.32677 11.4309 6.29798 11.4674 6.27879 11.5115C6.25959 11.5556 6.25 11.5978 6.25 11.7139L6.25 12.0175C6.25 12.1595 6.26857 12.2302 6.30343 12.2954C6.33829 12.3606 6.38945 12.4117 6.45463 12.4466C6.51982 12.4814 6.59053 12.5 6.73252 12.5L9.78681 12.5C9.90561 12.5 9.98018 12.4814 10.0454 12.4466C10.1106 12.4117 10.1617 12.3606 10.1966 12.2954C10.2314 12.2302 10.25 12.1556 10.25 12.0368L10.25 11.7942C10.25 11.6835 10.2416 11.6433 10.2244 11.6009C10.2072 11.5585 10.1812 11.5229 10.1461 11.4936C10.1109 11.4643 10.0753 11.4441 9.96982 11.4103L9.36023 11.2153C9.22466 11.1719 9.17879 11.1459 9.13362 11.1082C9.08845 11.0705 9.05505 11.0247 9.03293 10.9702C9.01082 10.9157 9 10.8641 9 10.7218L9 7.51278C9 7.33447 8.98143 7.26982 8.94657 7.20463C8.91171 7.13945 8.86055 7.08829 8.79537 7.05343C8.73018 7.01857 8.66553 7 8.48722 7Z", id: "Style", fill: "#D7D7D7", fillRule: "evenodd", stroke: "none" })))))));
};
export default Manager;
//# sourceMappingURL=Manager.js.map