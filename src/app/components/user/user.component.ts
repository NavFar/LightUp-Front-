import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataApiService } from '../../services/data-api.service';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  title: string;
  id: any;
  name: any;
  username: any;
  password: any;
  constructor(private route: ActivatedRoute, private router: Router, private dataApiService: DataApiService, private messageService: MessageService) { }

  ngOnInit() {
    this.title = "افزودن کاربر";
    this.id = this.route.snapshot.paramMap.get('id');
    if (!this.id)
      this.router.navigate(['/menu']);
  }
  submit() {
    if (!this.username) {
      this.messageService.add({ key: 'message', severity: 'warn', summary: 'عدم ثبت', detail: 'نام کاربری خالی است' })
      return;
    }
    if (!this.name) {
      this.messageService.add({ key: 'message', severity: 'warn', summary: 'عدم ثبت', detail: 'نام  خالی است' })
      return;
    }
    if (!this.password) {
      this.messageService.add({ key: 'message', severity: 'warn', summary: 'عدم ثبت', detail: ' رمز عبور خالی است' })
      return;
    }
    this.dataApiService.addUser(this.name, this.username, this.password).subscribe(
      (response) => {
        this.messageService.add({ key: 'message', severity: 'success', summary: 'ثبت', detail: 'کاربر ثبت شد.' });
        this.router.navigate(['/users']);
      },
      (error) => {
        if (error.status == 400) {
          this.messageService.add({ key: 'message', severity: 'warn', summary: 'عدم ثبت', detail: 'نام تکراری' })
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
  back() {
    this.router.navigate(['/users']);
  }
}
