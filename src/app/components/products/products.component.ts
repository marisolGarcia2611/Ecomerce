import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  @Input()  catId = '';
  products = [
    {
      id:1,
      categorieId:2,
      name:'Tenis Clasic - Lacoste Basico',
      urlImage:"../../../assets/products/tenis.jpg",
      descripcion:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur animi eveniet, voluptatum quae maiores beatae ratione corporis velit natus.",
      medida:"24cm - 30cm",
      precio: 200.19,
      created:"10 min ago"
    },
    {
      id:2,
      categorieId:3,
      name:'Bolsa Confort Blanca',
      urlImage:"../../../assets/products/bolsa.jpg",
      descripcion:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur animi eveniet, voluptatum quae maiores beatae ratione corporis velit natus.",
      medida:"CH MD GD",
      precio: 549.99,
      created:"3 min ago"
    },
    {
      id:3,
      categorieId:1,
      name:'Ralph Louren - Camisa Formal',
      urlImage:"../../../assets/products/camisa.webp",
      descripcion:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur animi eveniet, voluptatum quae maiores beatae ratione corporis velit natus.",
      medida:"CH MD GD",
      precio: 110.18,
      created:"40 min ago"
    },
    {
      id:4,
      categorieId:4,
      name:'Audifonos Bluetooth de Diadema',
      urlImage:"../../../assets/products/audifonos.avif",
      descripcion:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur animi eveniet, voluptatum quae maiores beatae ratione corporis velit natus.",
      medida:"",
      precio: 899.99,
      created:"2 min ago"
    },
    {
      id:5,
      categorieId:2,
      name:'Tenis Deportivos - Adidas Clasicos',
      urlImage:"../../../assets/products/adidas.webp",
      descripcion:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur animi eveniet, voluptatum quae maiores beatae ratione corporis velit natus.",
      medida:"24cm - 30cm",
      precio: 3499.99,
      created:"1 min ago"
    
    }
  ]
}
