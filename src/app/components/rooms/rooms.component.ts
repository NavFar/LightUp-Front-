import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { Router } from "@angular/router";

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  cols: any[];
  rooms: any[];
  tempRooms: any[];
  loading: boolean;
  totalRecords: number;
  display: boolean;
  data: any;
  constructor(private router: Router, private dataApiService: DataApiService, private messageService: MessageService) { }

  ngOnInit() {
    this.loading = true;
    this.rooms = [];
    this.cols = [
      { field: 'name', header: 'نام' },
    ];
    this.dataApiService.roomsCount().subscribe(
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
  loadRooms(event) {
    this.loading = true;
    this.dataApiService.allRooms(event.first, event.rows).subscribe(
      (response) => {
        this.rooms = response.rooms;
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
  back() {
    this.router.navigate(['/menu']);
  }
  addRoom() {
    this.router.navigate(['/room/', 'new']);
  }
  onRowSelect(event, rowData) {
    this.display = true;
    this.data = rowData;
  }
  remove() {
    this.display = false;
    this.dataApiService.deleteRoom(this.data.id).subscribe(
      (response) => {
        this.messageService.add({ key: 'message', severity: 'success', summary: 'حذف', detail: 'فضا حذف شد.' });
        this.router.navigate(['/menu']);
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
}
