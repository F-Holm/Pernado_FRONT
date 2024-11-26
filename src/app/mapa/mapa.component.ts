import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import * as L from 'leaflet'
import {LatLngExpression} from "leaflet";

@Component({
  selector: 'app-mapa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.css'
})
export class MapaComponent implements OnInit {
  aula: LatLngExpression = [-34.57297710502689, -58.50427617540819];
  private map!: L.Map;
  @Input() direccion!: string;

  constructor() { }

  ngOnInit(): void {
    this.initMap();
    this.searchAddress(this.direccion);
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: this.aula,
      zoom: 16
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 20,
      minZoom: 10,
      attribution: '© OpenStreetMap'
    }).addTo(this.map);
  }

  searchAddress(address: string): void {
    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${address}`)
      .then(response => response.json())
      .then(data => {
        if (data && data.length > 0) {
          const location = data[0];
          const latLng: LatLngExpression = [location.lat, location.lon];
          this.map.setView(latLng, 13);
          L.marker(latLng).addTo(this.map);
        }
      })
      .catch(error => console.error(error));
  }
}
