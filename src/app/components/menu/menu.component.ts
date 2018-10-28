import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  admin: boolean;
  constructor(private router: Router, private dataApiService: DataApiService, private messageService: MessageService) { }

  ngOnInit() {
    this.dataApiService.isAdmin().subscribe(
      (response) => {
        this.admin = response.admin;
      },
      (error) => {
        this.messageService.add({ key: 'message', severity: 'warn', summary: 'عدم تایید هویت', detail: 'هویت شما تایید نشده است.' })
        this.router.navigate(['/login']);
      }
    );
  }
  selfAccount() {
    this.router.navigate(['/self']);
  }
  reports() {
    this.router.navigate(['/reports']);
  }
  patterns() {
    this.router.navigate(['/patterns']);

  }
  rooms() {
    this.router.navigate(['/rooms']);

  }
  users() {
    this.router.navigate(['/users']);
  }
  exit() {
    this.dataApiService.removeToken();
    this.messageService.add({ key: 'message', severity: 'success', summary: 'خروج', detail: 'شما از سامانه خارج شده اید.' });
    this.router.navigate(['/login']);
  }
}
