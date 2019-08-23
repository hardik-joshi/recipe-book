import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import * as fromAuth from '../store/app.reducer';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router, private store: Store<fromAuth.AppState>) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        boolean |
        UrlTree |
        Promise<boolean | UrlTree> |
        Observable<boolean | UrlTree> {
        return this.store.select('auth')
            .pipe(
                take(1),
                map(authState => {
                    return authState.user;
                }),
                map(user => {
                    const isAuth = !!user;
                    if (isAuth) {
                        return true;
                    }
                    return this.router.createUrlTree(['/auth']);
                })
            );
    }
}