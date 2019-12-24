import { Component, OnInit } from '@angular/core';
import { WeatherForecast } from './entities/weatherforecast';
import { WeatherForecastService } from './weather-forecast..service';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss']
})
export class WeatherForecastComponent implements OnInit {
  weatherForecast: Array<WeatherForecast>;

  constructor(private weatherForecastService: WeatherForecastService) { }

  ngOnInit() {
    this.weatherForecastService.listar().subscribe((response: Array<WeatherForecast>) => {
      this.weatherForecast = response;
    }, (err) => {
      console.log(err);
    });  
  }
}
