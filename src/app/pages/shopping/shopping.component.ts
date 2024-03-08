import { Component } from '@angular/core';
import {CompraProductComponent} from '../../components/compra-product/compra-product.component';
@Component({
  selector: 'app-shopping',
  standalone: true,
  imports: [CompraProductComponent],
  templateUrl: './shopping.component.html',
  styleUrl: './shopping.component.css'
})
export class ShoppingComponent {
}
