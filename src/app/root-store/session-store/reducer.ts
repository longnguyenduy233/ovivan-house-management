import { Action, createReducer, on } from "@ngrx/store";
import { SessionActions } from "./actions";
import { SessionState } from "./state";

export const stateName = 'session';

const featureReducer = createReducer<SessionState>(
    {
        session: undefined,
        isLoading: false,
        error: undefined,
    },

    on(SessionActions.LoginBegin, (previousState, { }) => {
        return {
            ...previousState,
            isLoading: true,
        };
    }),

    on(SessionActions.LoginSuccess, (previousState, { accessToken }) => {
        return {
            ...previousState,
            session: {
                token: accessToken
            },
            error: undefined,
            isLoading: false,
        };
    }),

    on(SessionActions.LoginFailure, (previousState, { error }) => {
        return {
            ...previousState,
            error,
            isLoading: false,
        };
    }),

    on(SessionActions.Logout, (previousState, { }) => {
        return {
            ...previousState,
            session: undefined,
            isLoading: false,
        };
    }),
);

export function reducer(state: SessionState | undefined, action: Action) {
    return featureReducer(state, action);
}
