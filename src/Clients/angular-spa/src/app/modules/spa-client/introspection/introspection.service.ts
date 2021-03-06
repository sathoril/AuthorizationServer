import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccessTokenValidator } from './entities/access-token-validator';
import { AuthConfig } from 'angular-oauth2-oidc';

@Injectable({
    providedIn: 'root'
})
export class IntrospectionService {
    private urlBase = environment.url;

    constructor(private http: HttpClient) { }

    validarToken(accessToken: string): Observable<any> {
        let token = new AccessTokenValidator(accessToken);
        return this.http.post<any>(this.urlBase + 'introspect', token);
    }
}
