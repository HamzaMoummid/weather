import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { CurrentWeather } from '../current-weather';

@Component({
  selector: 'wa-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {

  myWeather:CurrentWeather;
  constructor(private ws:WeatherService) { }

  ngOnInit() {
    this.myWeather = this.ws.weatherForCast();
  }

}
