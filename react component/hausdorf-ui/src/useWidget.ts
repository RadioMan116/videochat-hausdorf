import { useMemo, useReducer } from 'react';

export enum ModalState {
  CLOSED,
  LOBBY,
  CALL,
}

export interface WidgetState {
  state: ModalState;
  streamerId?: string;
}

const initialState: WidgetState = {
  state: ModalState.CLOSED,
};

type Action =
  | { state: ModalState.CLOSED | ModalState.LOBBY }
  | { state: ModalState.CALL; streamerId: string };

const reducer = (state: WidgetState, action: Action): WidgetState => {
  return action;
};

export const useWidget = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useMemo(
    () => ({
      openLobby: () => dispatch({ state: ModalState.LOBBY }),
      openCall: (streamerId: string) =>
        dispatch({ state: ModalState.CALL, streamerId }),
      close: () => dispatch({ state: ModalState.CLOSED }),
    }),
    [dispatch],
  );
  return {
    ...state,
    ...actions,
  };
};

export type WidgetHook = ReturnType<typeof useWidget>;
