import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit {
  gifs: any[] = [];

  constructor(private dataService: DatosService) { 
    
  }

  ngOnInit(): void {
    this.dataService.obtenerGifs().subscribe((response: any)=>{
      console.log(response);
      this.gifs = response.data;
    });
  }

}
