import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'string';
  numberOne: number =1;
  numberTwo: number =2;
  togglePokemon:boolean=false
  constructor(){
    this.title  ='Mluleki'
  }
}
