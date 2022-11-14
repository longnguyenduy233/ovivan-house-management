import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, forkJoin, map, of, switchMap } from 'rxjs';
import { SessionService } from 'src/app/core/services/session.service';
import { SessionActions } from './actions';

@Injectable()
export class SessionStoreEffect {

    constructor(
        private actions$: Actions,
        private router: Router,
        private sessionService: SessionService
    ) { }

    private loginEffect$ = createEffect(() => this.actions$.pipe(
        ofType(SessionActions.LoginBegin),
        switchMap(action => {
            return forkJoin([
                of(action),
                this.sessionService.login(action.username, action.password).pipe(
                    map((resp: any) => SessionActions.LoginSuccess(
                        { accessToken: resp.accessToken })
                    ),
                    catchError(err => of(SessionActions.LoginFailure({ error: err }))),
                )
            ]);
        }),
        switchMap(([action, resultAction]) => {
            this.router.navigate(['']);
            return of(resultAction);
        }),
    ));
}
