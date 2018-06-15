import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';


@Injectable()
export class WeatherService {

  private apiUrl = 'http://localhost:8080/weather/getWeather';
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'})
  };

  constructor(private http: HttpClient) {
  }

  getWeatherData(service: string, city: string, unit: string): Observable<any> {
    return this.http.post(this.apiUrl, this.getBody(service, city, unit), this.httpOptions);

  }

  getBody(service: string, city: string, unit: string) {
    return {service: service, "city": city, "unitMeasure": unit}
  }

}
