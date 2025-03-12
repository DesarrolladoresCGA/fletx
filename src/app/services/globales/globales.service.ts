import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalesService {

  constructor() { }

  tileLayer(){
    return 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  }

  attribution(){
    return '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
  }
}
