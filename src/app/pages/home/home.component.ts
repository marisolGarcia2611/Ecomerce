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
  categorie = 0;

  categories = [
    {
      id:1,
      name:'Camisas',
      iconName:"fa-solid fa-shirt",
    },
    {
      id:2,
      name:'Shoes',
      iconName:"fa-solid fa-shoe-prints",
    },
    {
      id:3,
      name:'Bags',
      iconName:"fa-solid fa-bag-shopping",
    },
    {
      id:4,
      name:'Audio',
      iconName:"fa-solid fa-headphones",
    },
  ]
}
