import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { Router } from "@angular/router";

@Component({
  selector: 'app-patterns',
  templateUrl: './patterns.component.html',
  styleUrls: ['./patterns.component.css']
})
export class PatternsComponent implements OnInit {
  cols: any[];
  patterns: any[];
  loading: boolean;
  totalRecords: number;
  display: boolean;
  data: any;
  constructor(private router: Router, private dataApiService: DataApiService, private messageService: MessageService) { }

  ngOnInit() {
    this.loading = true;
    this.patterns = [];
    this.cols = [
      { field: 'name', header: 'نام', width: '75%' },
      { field: 'active', header: 'فعال', width: '25%' },
    ];
    this.dataApiService.patternsCount().subscribe(
      (response) => {
        this.totalRecords = response.count;
      },
      (error) => {
        if (error.status == 401) {
          this.messageService.add({ key: 'message', severity: 'warn', summary: 'عدم تایید هویت', detail: 'هویت شما تایید نشده است.' })
          this.router.navigate(['/login']);
          return;
        }
        if (error.status == 406) {
          this.messageService.add({ key: 'message', severity: 'warn', summary: 'مشکل سطح دسترسی', detail: 'شما اجازه دسترسی به این بخش را ندارید.' })
          this.router.navigate(['/menu']);
          return;
        }
        this.messageService.add({ key: 'message', severity: 'error', summary: 'مشکل', detail: 'مشکلی پیش امده' })
        this.router.navigate(['/login']);
      }
    );
  }
  loadPatterns(event) {
    this.loading = true;
    this.dataApiService.allPatterns(event.first, event.rows).subscribe(
      (response) => {
        this.patterns = response.patterns;
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
  addPatterns() {
    this.router.navigate(['/pattern/', 'new']);
  }
  onRowSelect(event, rowData) {
    this.display = true;
    this.data = rowData;
  }
  remove() {
    this.display = false;
    this.dataApiService.deletePattern(this.data.id).subscribe(
      (response) => {
        this.messageService.add({ key: 'message', severity: 'success', summary: 'حذف', detail: 'الگو حذف شد.' });
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
  activate() {
    this.display = false;
    this.dataApiService.activatePattern(this.data.id).subscribe();
  }
}
