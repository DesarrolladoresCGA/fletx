import { Injectable } from '@angular/core';
import {io} from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  //qie no se conecte automaticamente
  server =  io("localhost:3000",{autoConnect: false});

  constructor() {
    this.server.on("connect", () => {
      console.log("Conectado al WebSocket");
    });

    // Escuchar mensajes del servidor
    this.server.on("mensajeCliente", (mensaje) => {
      console.log("Mensaje recibido:", mensaje);
      this.mensajes.push(mensaje); // Guardar en la lista
    });

    this.server.connect();
  }

  // Lista de mensajes (simulación de historial de chat)
  mensajes: string[] = [];

  enviarMensaje(mensaje: string) {
    this.server.emit("mensajeCliente", mensaje);
  }
  
}
