export class CurrentWeather {
    constructor(
        public cityName:string,
        public temp:string,
        public icon:string,
        public weatherKind:string,
        public tempMax:string,
        public tempMin:string
    ){}

    public static createFromReturn(data){
        let obj = new CurrentWeather(data.name,
                                 data.main.temp,
                                 'http://openweathermap.org/img/w/'+ data.weather[0].icon +'.png',
                                 data.weather[0].description,
                                 data.main.temp_max,
                                 data.main.temp_min
                                );
        return obj;
    }
}
