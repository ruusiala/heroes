import { Component, OnInit } from '@angular/core';

declare var ol: any;

@Component({
	selector: 'my-map-app',
	template: `<h1>My first openlayers 3 Angular 2 App</h1>
    <div id="map" class="map"></div>
    `
})

export class MapComponent implements OnInit {
	ol: any;
	constructor() { }

	ngOnInit(): void {
		var map = new ol.Map({
			controls: ol.control.defaults({
				attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
					collapsible: false
				})
			}).extend([
				new ol.control.ZoomToExtent({
					extent: [
						813079.7791264898, 5929220.284081122,
						848966.9639063801, 5936863.986909639
					]
				})
			]),
			layers: [
				new ol.layer.Tile({
					source: new ol.source.OSM()
				})
			],
			target: 'map',
			view: new ol.View({
				projection: 'EPSG:900913',
				center: [18.0, 55.4],
				zoom: 7
			})
		});

	}
}