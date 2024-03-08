import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {ProductsComponent} from '../../components/products/products.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet,RouterLink, RouterLinkActive,ProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 
}
