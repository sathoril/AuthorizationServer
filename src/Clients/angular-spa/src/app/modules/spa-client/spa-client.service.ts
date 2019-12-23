import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { WeatherForecast } from './weather-forecast/entities/weatherforecast';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpaClientService {
  private urlBase = environment.url + "weatherforecast";

  constructor(private http: HttpClient) { }

  listar(): Observable<Array<WeatherForecast>>{
    console.log(this.urlBase)
    return this.http.get<Array<WeatherForecast>>(this.urlBase);
  }
}
