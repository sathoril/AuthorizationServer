import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { WeatherForecast } from './entities/weatherforecast';
import { Observable } from 'rxjs';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastService {
  private urlBase = environment.url + "weatherforecast";

  constructor(private http: HttpClient, private oAuthService: OAuthService) { }

  listar(): Observable<Array<WeatherForecast>>{
    return this.http.get<Array<WeatherForecast>>(this.urlBase);
  }
}
