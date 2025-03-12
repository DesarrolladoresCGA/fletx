import { Component, OnInit } from '@angular/core';
import { RickAndMortyServiceService } from '../../services/rick-and-morty-service.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{
  page      : number;
  numPages  : number;
  totalRegi : number;
  canPorPage: number;
  startPage: number;
  endPage: number;

  personajes: any[] = [];

  constructor(private api: RickAndMortyServiceService, private router: Router){
    this.page       = 1;
    this.numPages   = this.page;
    this.totalRegi  = 0;
    this.canPorPage = 20;
    this.startPage  = 1;
    this.endPage    = 10;

  }

  ngOnInit(): void {
    this.traerDatos();
    this.numPaginas();

  }

  async  traerDatos(){
    try {
      const data = await this.api.traerDatos(this.page);
      if (data.length > 0) {
        this.personajes = data; 
      } else {
        console.log('No hay personajes en esta página');
      }
    } catch (error) {
      console.error('Error al cargar los datos:', error);
    }
  
  }

  async numPaginas() {
    try {
      const data = await this.api.nunDAtos(this.page);
      this.totalRegi = parseInt(data.count, 10); 
     
      this.numPages = Math.ceil(this.totalRegi / this.canPorPage);  

    } catch (error) {
      console.error('Error al cargar el número de páginas:', error);
    }
  }


  changePage(newPage: number) {
    //carlular las paginas para next y previos
    if (newPage >= 1 && newPage <= this.numPages) {
      this.page = newPage;
      this.traerDatos();
       // Actualizar el rango de páginas a mostrar
      this.updatePageRange(); 
    }
  }

  changeRecordsPerPage(newCount: number) {
    this.canPorPage = newCount;
    this.page = 1;
    this.numPaginas();
    this.traerDatos();
  }


  updatePageRange() {
    // Actualizar el rango de páginas a mostrar (páginas de 10 en 10)
    const block = Math.floor((this.page - 1) / 10);
    this.startPage = block * 10 + 1;
    this.endPage = Math.min(this.startPage + 9, this.numPages);
  }


  viewDetail(id: string){
    this.router.navigate(['details',id]);
  }
}
