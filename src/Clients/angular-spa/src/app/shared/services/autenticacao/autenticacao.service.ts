import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private http: HttpClient) { }

  // private urlComApi = environment.urlComApi;
  // private url =  environment.url;

  // obterHeaders(): Headers {
  //   const token = localStorage.getItem('token');
  //       const headers = new Headers({ 'Content-Type': 'application/json' });
  //       headers.append('Authorization', `Bearer ${token}`);
  //       return headers;
  // }

  // descobrirSeUsuarioEstaLogado() : Observable<boolean>{
  //   return this.http.get<boolean>(this.urlComApi + "login/DescobrirSeUsuarioEstaLogado");
  // }
}
