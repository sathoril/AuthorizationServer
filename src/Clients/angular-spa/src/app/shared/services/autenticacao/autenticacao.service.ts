import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { OAuthService } from 'angular-oauth2-oidc';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private authService: OAuthService) { }


  usuarioEstaAutenticado() : Observable<boolean>{
    return new BehaviorSubject<boolean>(this.authService.hasValidAccessToken()).asObservable();
  }
}
