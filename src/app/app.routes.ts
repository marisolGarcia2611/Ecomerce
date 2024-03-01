import { Routes } from '@angular/router';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {LoginComponent} from './pages/login/login.component';
import {MainComponent} from './pages/main/main.component';
import {HomeComponent} from './pages/home/home.component';
import {PuntoVentaComponent} from './pages/punto-venta/punto-venta.component';

export const routes: Routes = [
    { path: 'LogIn', component: LoginComponent },
    { path: '', component: HomeComponent },
    { path: 'Main', component: MainComponent },
    { path: 'PuntoVenta', component: PuntoVentaComponent },
    { path: '**', component: PageNotFoundComponent },  
    // { path: '', component: AppComponent}, 
    // { path: '',   redirectTo: '/first-component', pathMatch: 'full' }, 
];
