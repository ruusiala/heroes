import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroListComponent } from './hero-list.component';
import { DashboardComponent } from './dashboard.component';
import { HeroService } from './hero.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
    {
      path: 'heroes',
      component: HeroListComponent
    },
    {
      path: 'dashboard',
      component: DashboardComponent
    },
    {
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    }


  ])
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroListComponent,
    DashboardComponent
  ],
  providers: [
  HeroService
], 
  bootstrap: [AppComponent]
})
  export class AppModule { }
