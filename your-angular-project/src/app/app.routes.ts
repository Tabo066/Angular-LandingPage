import { Routes } from '@angular/router'; 
import { Home } from './home/home';
import { Products } from './products/products';
import { CheckoutComp } from './checkout-comp/checkout-comp';

export const appRoutes: Routes = [
  { path: '', component: Home },
  { path: 'products', component: Products },
  { path: 'checkout', component: CheckoutComp },
  { path: '**', redirectTo: '' }
];
