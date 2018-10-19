import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component'
import { MenuComponent } from '../components/menu/menu.component';
import { SelfAccountComponent } from '../components/self-account/self-account.component';
import { ReportsComponent } from '../components/reports/reports.component';
import { UsersComponent } from '../components/users/users.component';
import { PatternsComponent } from '../components/patterns/patterns.component';
import { RoomsComponent } from '../components/rooms/rooms.component';
import { PatternComponent } from '../components/pattern/pattern.component';
import { UserComponent } from '../components/user/user.component';
import { RoomComponent } from '../components/room/room.component';

const routes: Routes = [
  //{ path: '', component:, pathMatch: 'full'  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'menu', component: MenuComponent, pathMatch: 'full' },
  { path: 'self', component: SelfAccountComponent, pathMatch: 'full' },
  { path: 'reports', component: ReportsComponent, pathMatch: 'full' },
  { path: 'users', component: UsersComponent, pathMatch: 'full' },
  { path: 'patterns', component: PatternsComponent, pathMatch: 'full' },
  { path: 'rooms', component: RoomsComponent, pathMatch: 'full' },
  { path: 'user/:id', component: UserComponent, pathMatch: 'full' },
  { path: 'pattern/:id', component: PatternComponent, pathMatch: 'full' },
  { path: 'room/:id', component: RoomComponent, pathMatch: 'full' },

  { path: '**', redirectTo: "login", pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
