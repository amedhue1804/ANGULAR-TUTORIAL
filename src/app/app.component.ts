import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./components/footer/footer.component";
import { TasklistComponent } from "./components/task/tasklist/tasklist.component";
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, FormsModule, FooterComponent, TasklistComponent, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  title='angular-tutorial';
  imagenAleatoria:string="";
  nombre="";
  url=""
  muestraImagen(){
   let random:number = Math.trunc((Math.random()*1000)+100);
   this.imagenAleatoria = "https://picsum.photos/200/300?random"+random
  }
  
  }
