import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component'
import { MenuComponent } from '../components/menu/menu.component';
import { SelfAccountComponent } from './components/self-account/self-account.component';

const routes: Routes = [
  //{ path: '', component:, pathMatch: 'full'  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'menu', component: MenuComponent, pathMatch: 'full' },
  { path: 'self', component: SelfAccountComponent, pathMatch: 'full' },
  { path: '**', redirectTo: "login", pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
