import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FlightsResponse} from '../models/FlightsResponse';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent  {
  url:string = 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/';
  public flightsResponse: FlightsResponse [];
  config = { headers:  {
      'X-RapidAPI-Key': '78e91eec31msh380b59179f8577bp134099jsnad08d4d35e71'
    }
  };

  constructor( private httpClient: HttpClient ) {
    this.getFlights();
  }

  getFlights() {
    this.httpClient.get(this.url, this.config)

      .subscribe(
        (response: FlightsResponse[]) => {
          this.flightsResponse = response;
        }
      );
  }

}
