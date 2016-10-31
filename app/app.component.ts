import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroListComponent } from './hero-list.component';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
    <h1> {{mainTitle }}</h1>
    <nav>
      <a routerLink= "/dashboard" > Dashboard </a>    
      <a routerLink= "/heroes" > Heroes </a>
    </nav>    
    <router-outlet > </router-outlet>
    `,
    styleUrls: ['app.component.css']
})
export class AppComponent {
    mainTitle='HERO APP' 
}




