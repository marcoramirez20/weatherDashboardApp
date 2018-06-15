import {Component} from '@angular/core';
import {WeatherService} from "../services/weather.service";
import {Observable, Subject} from "rxjs/index";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  whetherData;
  city;
  cities = [];

  api;
  apis = [];

  unit;
  units = [];

  errorMessage;

  constructor(private weatherService: WeatherService) {

    this.city = "Santiago";
    this.cities.push("Caracas");
    this.cities.push("Santiago");
    this.cities.push("Lima");
    this.cities.push("Bogota");
    this.cities.push("Buenos Aires");

    this.api = "Forecast.io";
    this.apis.push("Forecast.io");
    this.apis.push("AccuWeather");

    this.unit = "C";
    this.units.push("C");
    this.units.push("F");


  }

  ngOnInit() {
    this.getWeatherData();
  }

  getWeatherData() {
    this.weatherService.getWeatherData(this.api, this.city, this.unit)
      .subscribe(
        data => {
          this.whetherData = data;

          if (data.code != 200) {
            console.log(data);
          } else {

          }
        },
        error => {
          console.log(error);
          this.errorMessage = error.message;
        }
      );
  }

  update() {
    this.getWeatherData();
  }

}
