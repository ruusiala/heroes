// Keep the Input import for now, we'll remove it later:
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { MapComponent } from './map.component';


@Component({
    moduleId: module.id,
    selector: 'map-view',
    templateUrl: 'map-view.component.html',
    styleUrls: ['map-view.component.css']
})

export class MapViewComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
    }

}
