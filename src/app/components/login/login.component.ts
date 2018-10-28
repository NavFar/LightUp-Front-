import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: any;
  password: any;
  constructor(private router: Router, private dataApiService: DataApiService, private messageService: MessageService) { }

  ngOnInit() {
  }
  login() {
    if (!this.username) {
      this.messageService.add({ key: 'message', severity: 'warn', summary: 'اطلاعات ناقص', detail: 'نام کاربری وارد نشده است.' });
      return;
    }
    if (!this.password) {
      this.messageService.add({ key: 'message', severity: 'warn', summary: 'اطلاعات ناقص', detail: ' رمز عبور وارد نشده است.' });
      return;
    }
    this.dataApiService.login(this.username, this.password).subscribe(
      (response) => {
        this.messageService.add({ key: 'message', severity: 'success', summary: 'ورود موفق', detail: 'شما وارد سامانه شده‌اید.' });
        this.dataApiService.setToken(response.token);
        this.router.navigate(['/menu']);
      },
      (err) => {
        if (err.status == 401)
          this.messageService.add({ key: 'message', severity: 'error', summary: 'عدم ورود', detail: 'رمزعبور یا نام کاربری غلط است.' });
      }
    );
  }
}
