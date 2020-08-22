import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Validators} from '@angular/forms';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  name = new FormControl('');
}


