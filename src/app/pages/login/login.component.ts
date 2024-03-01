import { Component, Input, Output,EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  date = new Date();
  @Input() logIn = true;
  @Output() addFavoriteEvent = new EventEmitter<boolean>();//agregamos a favoritos para pasar a componente padre

  fav(logIn: boolean) { 
    this.addFavoriteEvent.emit(logIn);//con este nombre lo mandamos al padre
  }
}
