import { Injectable } from '@angular/core';
import { CurrentWeather } from './current-weather';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  current:CurrentWeather = new CurrentWeather('Marrakech','33','https://cdn1.iconfinder.com/data/icons/weather-elements/512/Weather_SunGradient.png','sunny','40','20')
  constructor(private http: HttpClient) { }

  weatherNow(){
    return this.current;
  }

  localWeather() {
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=44ebc40273d8ec8683e92665463625d9');
  }

 
}
