import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl';

@Component({
  selector: 'map-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrl: './mini-map.component.css'
})
export class MiniMapComponent {

  @Input() lngLat?: [number, number];

  @ViewChild('map') public divMap?: ElementRef;

  public map?: Map;

  ngAfterViewInit(){
    if (!this.lngLat) throw "LngLat can't be null";
    if (!this.divMap?.nativeElement) throw "Map div not found";

    // mapa
    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: 14, // starting zoom,
      interactive: false,
    });

    // marker
    const marker = new Marker()
                        .setLngLat(this.lngLat)
                        .addTo(this.map);
  }
}
