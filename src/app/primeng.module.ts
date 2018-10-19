import { NgModule } from '@angular/core';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@NgModule({
  imports: [
    MessageModule,
    MessagesModule,
    ToastModule,
    ButtonModule,
    TableModule,
  ],
  exports: [
    MessageModule,
    MessagesModule,
    ToastModule,
    ButtonModule,
    TableModule,
  ],
})
export class PrimengModule { }
