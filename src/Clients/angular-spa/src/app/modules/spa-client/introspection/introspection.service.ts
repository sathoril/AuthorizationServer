import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IntrospectionResult, AccessTokenValidator } from './entities/access-token-validator';
import { AuthConfig } from 'angular-oauth2-oidc';

@Injectable({
    providedIn: 'root'
})
export class IntrospectionService {
    private urlBase = environment.url;

    constructor(private http: HttpClient) { }

    validarToken(accessToken: string): Observable<IntrospectionResult> {
        debugger;

        let token = new AccessTokenValidator(accessToken);

        var params: any = {
            accessToken: accessToken
        }

        let bar = JSON.stringify(accessToken);
        let body = new HttpParams();
        body = body.set('accessToken', accessToken);


        return this.http.post<IntrospectionResult>(this.urlBase + 'introspect', token);
    }
}
