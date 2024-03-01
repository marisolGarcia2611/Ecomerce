import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {HomeComponent} from '../home/home.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet,RouterLink, RouterLinkActive,HomeComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
