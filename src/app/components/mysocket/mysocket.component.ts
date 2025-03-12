import { Component, inject } from '@angular/core';
import { ServerService } from '../../services/socket/server.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

@Component({
  selector: 'app-mysocket',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './mysocket.component.html',
  styleUrl: './mysocket.component.css'
})
export class MysocketComponent {

  
  serverService = inject(ServerService);
  mensaje: string = "";

  constructor(){

  }

  enviarMensaje() {
    if (this.mensaje.trim() !== "") {
      this.serverService.enviarMensaje(this.mensaje);
      this.mensaje = ""; 
    }
  }

  
}
