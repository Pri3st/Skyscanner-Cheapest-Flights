import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightsComponent } from './flights/flights.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import {Routes} from '@angular/router';
import { SearchComponent } from './search/search.component';
import {ReactiveFormsModule, Validators} from '@angular/forms';




const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'search', component: FlightsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];




@NgModule({
  declarations: [
    AppComponent,
    FlightsComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
      ],
    bootstrap: [AppComponent]
})
export class AppModule { }
