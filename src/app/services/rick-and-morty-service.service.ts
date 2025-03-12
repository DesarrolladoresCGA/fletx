import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyServiceService {
  url = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) { }


  async traerDatos(pagina: number) {
    let myUrl = this.url + "/?page=" + pagina;

    try {
      const request = await fetch(myUrl);
      const data = await request.json();

      if (request.status === 200) {

        return data.results;
      } else {
        return new Error('404');
      }
    } catch (error) {
      return new Error('404');
    }


  }

  async nunDAtos(pagina: number) {
    let myUrl = this.url + "/?page=" + pagina;

    try {
      const request = await fetch(myUrl);
      const data = await request.json();

      if (request.status === 200) {

        return data.info;
      } else {
        return new Error('404');
      }

    } catch (error) {
      throw new Error('404');
    }


  }

  async traerPersonPorId(id: string) {
    const myUrl = this.url + "/" + id;

    try {
      const request = await fetch(myUrl);

      if (request.status === 200) {

        const data = await request.json();
        return data;

      } else {
        // Lanzar un error como string
        throw new Error('404');
      }

    } catch (error) {
      // Asegurar que siempre lanza un error 404
      throw new Error('404');
    }
  }



  async traerEpisodio(url: string) {
    const myUrl = url;

    try {
      const request = await fetch(myUrl);
      const data = await request.json();

      if (request.status === 200) {
        // Retorna el objeto del personaje
        return data;
      } else {
        // Retorna null si no encuentra el personaje
        throw new Error('404');
      }
    } catch (error) {
      // En caso de error, retorna null
      throw new Error('404');
    }
  }


}
