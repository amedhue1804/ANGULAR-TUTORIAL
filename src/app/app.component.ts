import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from "./components/auth/login/login.component";
import { SiginComponent } from "./components/auth/sign/sign.component";
import { FooterComponent } from "./components/footer/footer.component";
import { TaskListComponent } from "./components/task/tasklist/tasklist.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, TaskListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  nombre = 'Adrian Medina Huerta';
}


