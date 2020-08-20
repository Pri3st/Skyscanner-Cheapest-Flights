import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FlightsResponse} from '../models/FlightsResponse';
@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit  {
  url: any = 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/GR/EUR/en-US/ATH-sky/JFK-sky/anytime';
  flightsResponse: FlightsResponse [];
  resultlength: any;
  config = { headers:  {
      'X-RapidAPI-Key': '78e91eec31msh380b59179f8577bp134099jsnad08d4d35e71'
    }
  };
  constructor( private httpClient: HttpClient ) {
      }
ngOnInit() {
  this.getFlights();
}
  getFlights() {
    return this.httpClient.get(this.url, this.config)

      .subscribe(
        (response: FlightsResponse[]) => {
          this.flightsResponse = response;
          this.resultlength = this.flightsResponse.length;
        }
      );
  }
}
