import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {MainComponent} from './pages/main/main.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink, RouterLinkActive,LoginComponent,MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecomerce';
  username = "mgarcia";
  @Input() logIn = true;

  getFavorite(logIn:boolean){
    this.logIn = logIn;//pasamos la infomacion que recibimos a la variable que hicimos
  }
}
