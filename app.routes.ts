import { RouterModule, Routes } from '@angular/router';
import { Login } from './non-auth/login/login';
import { Createorder } from './auth/createorder/createorder';
import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { Invoice } from './auth/invoice/invoice';
import { Editorder } from './auth/editorder/editorder';
import { Allorders } from './auth/allorders/allorders';
import { Usermanage } from './auth/usermanage/usermanage';
import { AdminGuard } from './guards/admin-guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'createorder', component: Createorder, canActivate: [AuthGuard] },
  { path: 'editorder/:consignment', component: Editorder, canActivate: [AuthGuard, AdminGuard] },
  { path: 'invoice/:consignment', component: Invoice, canActivate: [AuthGuard] },
  { path: 'dashboard', component: Allorders, canActivate: [AuthGuard] },
  { path: 'allusers', component: Usermanage, canActivate: [AuthGuard, AdminGuard] },
  { path: '**', redirectTo: '/login' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }




