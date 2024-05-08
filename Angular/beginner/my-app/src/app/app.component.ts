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
  title:string = 'basket of baby beavers';
  imageSrc: string ="https://cwhl.vet.cornell.edu/system/files/media/baby%20beavers%20%286%29.JPG"
  constructor(){ 
  }
}
