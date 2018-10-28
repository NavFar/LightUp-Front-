import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { Router } from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  cols: any[];
  users: any[];
  tempUsers: any[];
  loading: boolean;
  totalRecords: number;
  data: any;
  display: boolean;
  constructor(private router: Router, private dataApiService: DataApiService, private messageService: MessageService) { }

  ngOnInit() {
    this.loading = true;
    this.users = [];
    this.cols = [
      { field: 'name', header: 'نام', width: '60%' },
      { field: 'username', header: 'نام کاربری', width: '40%' },
    ];
    this.dataApiService.usersCount().subscribe(
      (response) => {
        this.totalRecords = response.count;
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
  loadUsers(event) {
    this.loading = true;
    this.dataApiService.allUsers(event.first, event.rows).subscribe(
      (response) => {
        this.users = response.users;
        this.loading = false;
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
  onRowSelect(event, rowData) {
    this.display = true;
    this.data = rowData;

  }
  remove() {
    this.display = false;
    this.dataApiService.deleteUser(this.data.id).subscribe(
      (response) => {
        this.messageService.add({ key: 'message', severity: 'success', summary: 'حذف', detail: 'کاربر حذف شد.' });
        this.router.navigate(['/menu']);
      },
      (error) => {
        if (error.status == 400) {
          this.messageService.add({ key: 'message', severity: 'warn', summary: 'عدم حذف', detail: 'مدیر قابل حذف نیست' })
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
    this.router.navigate(['/menu']);
  }
  addUser() {
    this.router.navigate(['/user/', 'new'])
  }
}
