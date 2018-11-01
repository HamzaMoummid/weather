import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { CurrentWeather } from '../current-weather';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'wa-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {

  myWeather:CurrentWeather;
  constructor(private ws:WeatherService) { }

  ngOnInit() {
    this.myWeather = this.ws.weatherNow();
    this.ws.localWeather().subscribe((data) => {
      this.myWeather = CurrentWeather.createFromReturn(data);
    });
  }

  onSubmit(weatherForm:NgForm){
    this.ws.weatherByCity(weatherForm.form.value.city).subscribe((data) => {
      this.myWeather = CurrentWeather.createFromReturn(data);
    });
  }

}
