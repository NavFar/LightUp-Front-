import { NgModule } from '@angular/core';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  imports: [
    MessageModule,
    MessagesModule,
    ToastModule,
    ButtonModule,
    TableModule,
    DropdownModule,
  ],
  exports: [
    MessageModule,
    MessagesModule,
    ToastModule,
    ButtonModule,
    TableModule,
    DropdownModule,
  ],
})
export class PrimengModule { }
