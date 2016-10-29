import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroListComponent } from './hero-list.component';

@Component({
    selector: 'my-app',
    template: `
    <h1> {{mainTitle }}</h1>
    <nav>
      <a routerLink= "/dashboard" > Dashboard </a>    
      <a routerLink= "/heroes" > Heroes </a>
    </nav>    
    <router-outlet > </router-outlet>
    `    
})
export class AppComponent {
    mainTitle='HERO APP' 
    title = 'Tour of Best Heroes';

}




