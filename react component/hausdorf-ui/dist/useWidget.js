import { useMemo, useReducer } from 'react';
export var ModalState;
(function (ModalState) {
    ModalState[ModalState["CLOSED"] = 0] = "CLOSED";
    ModalState[ModalState["LOBBY"] = 1] = "LOBBY";
    ModalState[ModalState["CALL"] = 2] = "CALL";
})(ModalState || (ModalState = {}));
const initialState = {
    state: ModalState.CLOSED,
};
const reducer = (state, action) => {
    return action;
};
export const useWidget = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const actions = useMemo(() => ({
        openLobby: () => dispatch({ state: ModalState.LOBBY }),
        openCall: (streamerId) => dispatch({ state: ModalState.CALL, streamerId }),
        close: () => dispatch({ state: ModalState.CLOSED }),
    }), [dispatch]);
    return {
        ...state,
        ...actions,
    };
};
//# sourceMappingURL=useWidget.js.map