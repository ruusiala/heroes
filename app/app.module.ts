import './rxjs-extensions';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule }     from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroListComponent } from './hero-list.component';
import { DashboardComponent } from './dashboard.component';
import { HeroService } from './hero.service';
import {HeroSearchComponent} from './hero-search.component';
import { MapComponent } from './map.component';
import { MapViewComponent } from './map-view.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroListComponent,
    DashboardComponent,
    HeroSearchComponent, 
    MapComponent,
    MapViewComponent
  ],
  providers: [
  HeroService
], 
  bootstrap: [AppComponent]
})
  export class AppModule { }
