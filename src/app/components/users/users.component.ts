import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
    this.loading = true;
    this.users = [];
    this.cols = [
      { field: 'name', header: 'نام', width: '60%' },
      { field: 'username', header: 'نام کاربری', width: '40%' },
    ];
    this.tempUsers = [
      { username: 'asdf', name: 'asdf', },
      { username: 'asdf', name: 'asdf', },
      { username: 'asdf', name: 'asdf', },
      { username: 'asdf', name: 'asdf', },
      { username: 'asdf', name: 'asdf', },
      { username: 'asdf', name: 'asdf', },
      { username: 'asdf', name: 'asdf', },
      { username: 'asdf', name: 'asdf', },
    ];
    this.totalRecords = this.tempUsers.length;
  }
  loadUsers(event) {
    this.loading = true;
    console.log(event.first);
    console.log(event.rows);
    setTimeout(() => {
      if (this.tempUsers) {
        this.users = this.tempUsers.slice(event.first, (event.first + event.rows));
        this.loading = false;
      }
    }, 1000);
  }
}
