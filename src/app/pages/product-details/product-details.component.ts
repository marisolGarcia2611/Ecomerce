import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {ProductsComponent} from '../../components/products/products.component';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [RouterOutlet,RouterLink, RouterLinkActive,ProductsComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  
  products = [
    {
      id:1,
      productId:1,
      img1:"../../../assets/products/tenis.avif",
      img2:"../../../assets/products/adidas.webp",
      img3:"null",
      img4:"null",
    },
  ]

  principalImg = "";
}
