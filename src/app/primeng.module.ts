import { NgModule } from '@angular/core';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';


@NgModule({
  imports: [
    MessageModule,
    MessagesModule,
    ToastModule,
    ButtonModule,
  ],
  exports: [
    MessageModule,
    MessagesModule,
    ToastModule,
    ButtonModule,
  ],
})
export class PrimengModule { }
