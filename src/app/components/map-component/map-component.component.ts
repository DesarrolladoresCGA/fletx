import { AfterViewInit, Component, OnInit } from '@angular/core';
import { icon, Map, marker, tileLayer } from 'leaflet';
import 'leaflet-routing-machine';
import { GlobalesService } from '../../services/globales/globales.service';
@Component({
  selector: 'app-map-component',
  standalone: true,
  imports: [],
  templateUrl: './map-component.component.html',
  styleUrl: './map-component.component.css'
})
export class MapComponentComponent implements OnInit {
  mapa: any;
  latitud: number;
  longitud: number;
  latidud2: number;
  longitud2: number;

  constructor(private global: GlobalesService) {
    this.latitud = 4.6018403;
    this.longitud = -74.0718526;
    this.latidud2 = 4.5981;
    this.longitud2 = -74.0760;
  }

  ngOnInit(): void {
    this.coodenadas();
  }


  coodenadas() {
    if ('geolocation' in navigator) {

      navigator.geolocation.getCurrentPosition((position) => {
        this.latitud = position.coords.latitude;
        this.longitud = position.coords.longitude;
      }, (error) => {
        alert("Por favor activar la ubicación para la carga del mapa");
      }
      );
    }

    this.cargarMapa();
  }



  cargarMapa() {
    const MAPA = document.getElementById('mapa') as HTMLElement;

    if (MAPA) {
      this.mapa = new Map('mapa').setView([this.latitud, this.longitud], 17);

      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.mapa);

      // Marcador de la ubicación actual
      marker([this.latitud, this.longitud],)
        .addTo(this.mapa)
        .bindPopup('<strong>Tu ubicación</strong>')
        .openPopup();

      // Marcador del destino (Casa de Nariño)
      marker([this.latidud2, this.longitud2],)
        .addTo(this.mapa)
        .bindPopup('<strong>Casa de Nariño</strong>');

      // Agregar la ruta entre los dos puntos
      (window as any).L.Routing.control({
        waypoints: [
          (window as any).L.latLng(this.latitud, this.longitud),
          (window as any).L.latLng(this.latidud2, this.longitud2)
        ],
        routeWhileDragging: true,
        // Grosor de la línea (weight)
        lineOptions: {
          styles: [{ color: 'red', opacity: 0.7, weight: 6 }] 
        },
      }).addTo(this.mapa);
    }


  }


}
