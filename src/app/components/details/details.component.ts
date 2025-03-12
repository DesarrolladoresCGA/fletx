import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RickAndMortyServiceService } from '../../services/rick-and-morty-service.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit, AfterViewInit{
  id: string;
  datosPerson   : any = {};
  episodios     : any [] = [];
  origin        : any ={};


  constructor(private api: RickAndMortyServiceService, private acRouter: ActivatedRoute){
    this.id = '';
    this.acRouter.params.subscribe(param =>{
      this.id = param['id'];
    });
  }

  ngOnInit(): void {
    this.traerDatosPersonaje();
  }

  ngAfterViewInit(): void {
  
  }

  async traerDatosPersonaje(){
    try {
      const data = await this.api.traerPersonPorId(this.id);

        this.datosPerson = data; 
        this.origin = data.origin;
        this.datosdeEpisodios(data.episode);

    } catch (error) {
      console.error('Error al cargar los datos:', error);
    }
  }

  async datosdeEpisodios(datos: any){

    for(let i =0; datos.length > i ; i++){

      try {
        const episodio = await this.api.traerEpisodio(datos[i]);
        
        this.episodios.push(episodio);

      } catch (error) {
        console.error('Error al cargar los datos:', error);
      }
    }

  }
}
