import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FlightsResponse} from '../models/FlightsResponse';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit  {
  url = 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/GR/EUR/en-US/ATH-sky/LHR-sky/anytime';
  flightsResponse: FlightsResponse [];
  resultlength: any;
  config = { headers:  {
      'X-RapidAPI-Key': '9546e1db3fmsh4c5417e763da442p1229b2jsn5d673a5785c8'
    }
  };

  constructor( private httpClient: HttpClient ) {
      }
// tslint:disable-next-line:typedef
ngOnInit() {
  this.getFlights();
}
  // tslint:disable-next-line:typedef
  getFlights() {
    this.httpClient.get(this.url, this.config)

      .subscribe(
        (response: FlightsResponse[]) => {
          this.flightsResponse = response;
          this.resultlength = this.flightsResponse;
        }
      );
  }
}
