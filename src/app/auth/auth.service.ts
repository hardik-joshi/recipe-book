import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { throwError, BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { environment } from '../../environments/environment';

import * as fromApp from '../store/app.reducer';
import * as AuthActions from './store/auth.actions';
import { User } from './user.model';

export interface AuthResponseData {
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
    //user = new BehaviorSubject<User>(null);
    tokenExpirationTimer: any;

    constructor(private http: HttpClient, private router: Router, private store: Store<fromApp.AppState>) { }

    signup(email: string, password: string) {
        return this.http
            .post<AuthResponseData>(
                'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + environment.firebaseAPIKey,
                {
                    email: email,
                    password: password,
                    returnSecureToken: true
                }
            )
            .pipe(catchError(this.handleError), tap(resData => {
                this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
            }));
    }

    login(email: string, password: string) {
        return this.http
            .post<AuthResponseData>(
                'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + environment.firebaseAPIKey,
                {
                    email: email,
                    password: password,
                    returnSecureToken: true
                }
            )
            .pipe(catchError(this.handleError), tap(resData => {
                this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
            }));
    }

    logout() {
        // this.user.next(null);
        this.store.dispatch(new AuthActions.Logout());
        this.router.navigate(['/auth']);
        localStorage.removeItem('userData');
        if (this.tokenExpirationTimer) {
            clearTimeout(this.tokenExpirationTimer);
        }
        this.tokenExpirationTimer = null;
    }

    autoLogin() {
        const userData: {
            email: string;
            id: string;
            _token: string;
            _tokenExpirationDate: string;
        } = JSON.parse(localStorage.getItem('userData'));

        if (!userData) {
            return;
        }
        const loggedUser = new User(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));
        if (loggedUser.token) {
            // this.user.next(loggedUser);
            this.store.dispatch(new AuthActions.Login({ email: userData.email, userId: userData.id, token: userData._token, expirationDate: new Date(userData._tokenExpirationDate) }))
            const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
            this.autoLogout(expirationDuration);
        }
    }

    autoLogout(expirationDuration: number) {
        this.tokenExpirationTimer = setTimeout(() => {
            this.logout();
        }, expirationDuration);
    }

    handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
        const tokenExpirationDate = new Date(new Date().getTime() + (expiresIn * 1000));
        const user = new User(email, userId, token, tokenExpirationDate);
        // this.user.next(user);
        this.store.dispatch(new AuthActions.Login({ email: email, userId: userId, token: token, expirationDate: tokenExpirationDate }));
        this.autoLogout(expiresIn * 1000);
        localStorage.setItem('userData', JSON.stringify(user));
    }

    handleError(errorRes: HttpErrorResponse) {
        let errorMessage = 'An unknown error occurred!';
        if (!errorRes.error || !errorRes.error.error) {
            return throwError(errorMessage);
        }
        switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMessage = 'This email already exist!';
                break;
            case 'INVALID_PASSWORD':
                errorMessage = 'This password is not correct.';
                break;
            case 'EMAIL_NOT_FOUND':
                errorMessage = 'This email is not correct.';
                break;
        }
        return throwError(errorMessage);
    }
}