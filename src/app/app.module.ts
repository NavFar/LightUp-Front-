import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrimengModule } from './primeng.module'
import { AppComponent } from './app.component';
import { MessageService } from 'primeng/api';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PrimengModule,
  ],
  providers: [
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
