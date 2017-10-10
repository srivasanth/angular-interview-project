import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HotelsService } from './service/hotels.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule} from '@angular/http';

import {  RouterModule, Routes } from '@angular/router';
import {MatDatepickerModule} from '@angular/material';

import { AppComponent } from './app.component';
import { ConatactUsComponent } from './conatact-us/conatact-us.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ConatactUsComponent },
  {path: 'home', component: HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ConatactUsComponent,
    DropdownComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    HotelsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
