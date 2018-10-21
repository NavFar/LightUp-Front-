import { NgModule } from '@angular/core';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { InputMaskModule } from 'primeng/inputmask';

@NgModule({
  imports: [
    MessageModule,
    MessagesModule,
    ToastModule,
    ButtonModule,
    TableModule,
    DropdownModule,
    DialogModule,
    InputMaskModule,
  ],
  exports: [
    MessageModule,
    MessagesModule,
    ToastModule,
    ButtonModule,
    TableModule,
    DropdownModule,
    DialogModule,
    InputMaskModule,
  ],
})
export class PrimengModule { }
