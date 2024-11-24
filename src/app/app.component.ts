import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from "./components/auth/login/login.component";
import { SiginComponent } from "./components/auth/sign/sign.component";
import { FooterComponent } from "./components/footer/footer.component";
import { TaskListComponent } from "./components/task/tasklist/tasklist.component";
import { FormsModule } from '@angular/forms';
import { TaskresumeComponent } from "./components/task/taskresume/resume.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FormsModule, FooterComponent, TaskListComponent],
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
