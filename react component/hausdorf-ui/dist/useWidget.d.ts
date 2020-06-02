export declare enum ModalState {
    CLOSED = 0,
    LOBBY = 1,
    CALL = 2
}
export interface WidgetState {
    state: ModalState;
    streamerId?: string;
}
export declare const useWidget: () => {
    openLobby: () => void;
    openCall: (streamerId: string) => void;
    close: () => void;
    state: ModalState;
    streamerId?: string | undefined;
};
export declare type WidgetHook = ReturnType<typeof useWidget>;
