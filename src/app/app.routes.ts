import { Routes } from '@angular/router';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {LoginComponent} from './pages/login/login.component';
import {MainComponent} from './pages/main/main.component';
import {HomeComponent} from './pages/home/home.component';
import {CatalogComponent} from './pages/catalog/catalog.component';
import {ProductDetailsComponent} from './pages/product-details/product-details.component';
import {ShoppingComponent} from './pages/shopping/shopping.component';
import {PuntoVentaComponent} from './pages/punto-venta/punto-venta.component';

export const routes: Routes = [
    { path: 'LogIn', component: LoginComponent },
    { path: '', component: HomeComponent },
    { path: 'Main', component: MainComponent },
    { path: 'Catalog', component: CatalogComponent },
    { path: 'Details', component: ProductDetailsComponent },
    { path: 'Shopping', component: ShoppingComponent },
    { path: 'PuntoVenta', component: PuntoVentaComponent },
    { path: '**', component: PageNotFoundComponent },  
    // { path: '', component: AppComponent}, 
    // { path: '',   redirectTo: '/first-component', pathMatch: 'full' }, 
];
