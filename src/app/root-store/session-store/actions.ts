import { createAction, props } from '@ngrx/store';

export const SessionType = {
    LoginBegin: '[session] login-begin',
    LoginSuccess: '[session] login-success',
    LoginFailure: '[session] login-failure',
    Logout: '[session] logout',
};

export const SessionActions = {

    LoginBegin: createAction(SessionType.LoginBegin, props<{ username: string, password: string, }>()),
    LoginSuccess: createAction(SessionType.LoginSuccess, props<{ accessToken: string }>()),
    LoginFailure: createAction(SessionType.LoginFailure, props<{ error: Error }>()),
    Logout: createAction(SessionType.Logout),
};
