import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrimengModule } from './primeng.module'
import { AppComponent } from './app.component';
import { MessageService } from 'primeng/api';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { MenuComponent } from './components/menu/menu.component';
import { SelfAccountComponent } from './components/self-account/self-account.component';
import { ReportsComponent } from './components/reports/reports.component';
import { UsersComponent } from './components/users/users.component';
import { PatternsComponent } from './components/patterns/patterns.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { PatternComponent } from './components/pattern/pattern.component';
import { UserComponent } from './components/user/user.component';
import { RoomComponent } from './components/room/room.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainContainerComponent,
    MenuComponent,
    SelfAccountComponent,
    ReportsComponent,
    UsersComponent,
    PatternsComponent,
    RoomsComponent,
    PatternComponent,
    UserComponent,
    RoomComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    PrimengModule,
    AppRoutingModule,
  ],
  providers: [
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
