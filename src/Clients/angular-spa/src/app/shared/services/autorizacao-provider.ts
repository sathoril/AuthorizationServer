import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve, CanActivateChild } from "@angular/router";
import { Observable, BehaviorSubject, ReplaySubject, combineLatest } from 'rxjs';
import { map, catchError, filter } from 'rxjs/operators';
import { AutenticacaoService } from './autenticacao/autenticacao.service';
import { OAuthService } from 'angular-oauth2-oidc';


@Injectable()
export class AutorizacaoProvider implements CanActivate {

    constructor(private router: Router, private oAuthService: OAuthService, private autenticacaoService: AutenticacaoService) {

    }

    private isAuthenticatedSubject$ = new BehaviorSubject<boolean>(false);
    public isAuthenticated$ = this.isAuthenticatedSubject$.asObservable();

    private isDoneLoadingSubject$ = new ReplaySubject<boolean>();
    public isDoneLoading$ = this.isDoneLoadingSubject$.asObservable();

    public canActivateProtectedRoutes$: Observable<boolean> = combineLatest(this.isAuthenticated$, this.isDoneLoading$).pipe(map(values => values.every(x => x)));

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): void {
        debugger;

        window.addEventListener('storage', (event) => {

            if (event.key !== 'access_token' && event.key !== null)
                return;

            this.isAuthenticatedSubject$.next(this.oAuthService.hasValidAccessToken());

            if (!this.oAuthService.hasValidAccessToken())
                this.oAuthService.initLoginFlow();

            this.oAuthService.events.subscribe(x => { this.isAuthenticatedSubject$.next(this.oAuthService.hasValidAccessToken()); });

            this.oAuthService.events.pipe(filter(x => ['token_received'].includes(x.type))).subscribe(x => this.oAuthService.loadUserProfile());

            this.oAuthService.events.pipe(filter(x => ['session_terminated', 'session_error'].includes(x.type))).subscribe(x => this.oAuthService.initLoginFlow());

            this.oAuthService.setupAutomaticSilentRefresh();

        });

        // if (this.oAuthService.getAccessToken()) {
        //     return this.autenticacaoService.usuarioEstaAutenticado().pipe(map((usuarioAutenticado: boolean) => {
        //         if (usuarioAutenticado) {
        //             return true;
        //         }

        //         this.router.navigate(['']);
        //         return false;
        //     }));
        // }

        // this.router.navigate(['']);
        // return false;
    };
}