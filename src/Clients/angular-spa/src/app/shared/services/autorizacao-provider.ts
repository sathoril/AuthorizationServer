import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve, CanActivateChild } from "@angular/router";
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { OAuthService } from 'angular-oauth2-oidc';
import { AutenticacaoService } from './autenticacao/autenticacao.service';


@Injectable()
export class AutorizacaoProvider implements CanActivateChild  {

    constructor(private router: Router, private oAuthService: OAuthService, private autenticacaoService: AutenticacaoService) {
    }

    canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        debugger;
        if (this.oAuthService.getAccessToken()) {
            return this.autenticacaoService.usuarioEstaAutenticado().pipe(map((usuarioAutenticado: boolean) => {
                if (usuarioAutenticado) {
                    return true;
                }

                this.router.navigate(['']);
                return false;
            }));
        }

        this.router.navigate(['']);
        return false;
    };
}