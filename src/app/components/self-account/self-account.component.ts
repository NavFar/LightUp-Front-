import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { Router } from '@angular/router';
@Component({
  selector: 'app-self-account',
  templateUrl: './self-account.component.html',
  styleUrls: ['./self-account.component.css']
})
export class SelfAccountComponent implements OnInit {
  username: any;
  name: any;
  oldpassword: any;
  newpassword1: any;
  newpassword2: any;
  display: boolean;
  constructor(private router: Router, private dataApiService: DataApiService, private messageService: MessageService) { }

  ngOnInit() {
    this.display = false;
    this.dataApiService.self().subscribe(
      (response) => {
        this.username = response.username;
        this.name = response.name;
      },
      (error) => {
        if (error.status == 401) {
          this.messageService.add({ key: 'message', severity: 'warn', summary: 'عدم تایید هویت', detail: 'هویت شما تایید نشده است.' })
        }
        this.router.navigate(['/login']);
      }
    );
  }
  submit() {
    if (!this.oldpassword) {
      this.messageService.add({ key: 'message', severity: 'warn', summary: 'عدم ثبت', detail: ' رمز عبور خالی است' })
      return;
    }
    if (!this.newpassword1) {
      this.messageService.add({ key: 'message', severity: 'warn', summary: 'عدم ثبت', detail: 'رمز جدید  خالی است' })
      return;
    }
    if (!this.newpassword2) {
      this.messageService.add({ key: 'message', severity: 'warn', summary: 'عدم ثبت', detail: ' تکرار رمز عبور خالی است' })
      return;
    }
    this.display = false;
    if (this.newpassword1 != this.newpassword2) {
      this.messageService.add({ key: 'message', severity: 'error', summary: 'عدم ارسال', detail: 'رمز عبور جدید با هم برابر نیست' });
      return;
    }
    this.dataApiService.changePassword(this.oldpassword, this.newpassword1).subscribe(
      (response) => {
        this.messageService.add({ key: 'message', severity: 'success', summary: 'تغییر رمز عبور', detail: 'رمز عبور با موفقیت تغییر کرد' })
        this.oldpassword = this.newpassword1 = this.newpassword2 = "";
      },
      (error) => {
        if (error.status = 406)
          this.messageService.add({ key: 'message', severity: 'warn', summary: 'عدم تغییر رمز', detail: 'رمز عبور قبلی درست نیست' })
        else {
          this.messageService.add({ key: 'message', severity: 'error', summary: 'عدم تغییر رمز', detail: 'درخواست مشکل دارد' })
          this.router.navigate(['/login']);
        }
      }
    );

  }
  back() {
    this.router.navigate(['/menu']);
  }
}
