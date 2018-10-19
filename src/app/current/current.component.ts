import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { CurrentWeather } from '../current-weather';

@Component({
  selector: 'wa-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {

  localWeather;
  myWeather:CurrentWeather;
  constructor(private ws:WeatherService) { }

  ngOnInit() {
    this.myWeather = this.ws.weatherNow();
    this.ws.localWeather().subscribe((data) => {
      this.localWeather = data;
      console.log(this.localWeather);
    });
    
  }

}
