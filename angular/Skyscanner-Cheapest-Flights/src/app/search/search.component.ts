import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {FormGroup} from '@angular/forms';
import {Validators} from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  name = new FormControl('');
}


