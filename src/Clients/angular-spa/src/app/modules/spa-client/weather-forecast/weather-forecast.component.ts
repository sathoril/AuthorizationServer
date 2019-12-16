import { Component, OnInit } from '@angular/core';
import { WeatherForecast } from './entities/weatherforecast';
import { SpaClientService } from './spa-client.service';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss']
})
export class WeatherForecastComponent implements OnInit {
  weatherForecast: Array<WeatherForecast>;

  constructor(private spaClientService: SpaClientService) { }

  ngOnInit() {
    this.spaClientService.listar().subscribe((response: Array<WeatherForecast>) => {
      this.weatherForecast = response;
    }, (err) => {
      console.log(err);
    });  
  }
}
