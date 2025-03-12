import { Component, OnInit } from '@angular/core';
import { RickAndMortyServiceService } from '../../services/rick-and-morty-service.service';
import { CommonModule } from '@angular/common';
import { ListComponent } from "../list/list.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit  {


  constructor(){

  }

  ngOnInit(): void {
 
  }

}
