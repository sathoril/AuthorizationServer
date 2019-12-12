import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { AutenticacaoService } from './autenticacao/autenticacao.service';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable()
export class AutorizacaoProvider {// implements CanActivate {

    constructor(private router: Router, private autenticacaoService: AutenticacaoService) {
    }

    // canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    //     return this.autenticacaoService.descobrirSeUsuarioEstaLogado().pipe(map((usuarioEstaLogado: boolean) => {
    //         if (localStorage.getItem('token') && usuarioEstaLogado) {
    //             return true;    
    //         }
    //         this.router.navigate(['/login']);
    //         return false;
            
    //     }));
    // }
}