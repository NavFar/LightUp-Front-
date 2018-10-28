import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { Router } from "@angular/router";

@Component({
  selector: 'app-pattern',
  templateUrl: './pattern.component.html',
  styleUrls: ['./pattern.component.css']
})
export class PatternComponent implements OnInit {
  title: string;
  dialogHeader: string;
  showDialog: boolean;
  rooms: any[];
  name: any
  constructor(private router: Router, private dataApiService: DataApiService, private messageService: MessageService) { }

  ngOnInit() {
    this.showDialog = false;
    this.title = "افزودن الگو";
    this.dialogHeader = "انتخاب کنید.";
    this.rooms = [];
    this.dataApiService.allRooms(0, 2000).subscribe(
      (response) => {
        for (var i = 0; i < response.rooms.length; i++) {
          this.rooms.push({ id: response.rooms[i].id, name: response.rooms[i].name, value: 0 })
        }
      },
      (error) => {
        if (error.status == 401) {
          this.messageService.add({ key: 'message', severity: 'warn', summary: 'عدم تایید هویت', detail: 'هویت شما تایید نشده است.' })
          this.router.navigate(['/login']);
          return;
        }
        if (error.status == 403) {
          this.messageService.add({ key: 'message', severity: 'warn', summary: 'مشکل سطح دسترسی', detail: 'شما اجازه دسترسی به این بخش را ندارید.' })
          this.router.navigate(['/menu']);
          return;
        }
        this.messageService.add({ key: 'message', severity: 'error', summary: 'مشکل', detail: 'مشکلی پیش امده' })
        this.router.navigate(['/login']);
      }

    );
  }
  back() {
    this.router.navigate(['/patterns']);
  }
  submit() {
    if (!this.name) {
      this.messageService.add({ key: 'message', severity: 'warn', summary: 'عدم ثبت', detail: 'نام نباید خالی باشد.' })
      return;
    }
    this.dataApiService.addPattern(this.name, this.rooms).subscribe(
      (response) => {
        this.messageService.add({ key: 'message', severity: 'success', summary: 'ثبت', detail: 'الگوبا موفقیت ذخیره شد.' })
        this.router.navigate(['/patterns']);
        return;
      },
      (error) => {
        if (error.status == 400) {
          this.messageService.add({ key: 'message', severity: 'warn', summary: 'عدم ثبت', detail: 'مقادیر وارد شده صحیح نیست' })
          return;
        }
        if (error.status == 401) {
          this.messageService.add({ key: 'message', severity: 'warn', summary: 'عدم تایید هویت', detail: 'هویت شما تایید نشده است.' })
          this.router.navigate(['/login']);
          return;
        }
        if (error.status == 403) {
          this.messageService.add({ key: 'message', severity: 'warn', summary: 'مشکل سطح دسترسی', detail: 'شما اجازه دسترسی به این بخش را ندارید.' })
          this.router.navigate(['/menu']);
          return;
        }
        this.messageService.add({ key: 'message', severity: 'error', summary: 'مشکل', detail: 'مشکلی پیش امده' })
        this.router.navigate(['/login']);
      }
    );

  }


}
