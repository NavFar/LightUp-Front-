import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  cols: any[];
  reports: any[];
  tempReporst: any[];
  loading: boolean;
  totalRecords: number;

  constructor() {

  }
  ngOnInit() {
    this.loading = true;
    this.reports = [];
    this.cols = [
      { field: 'text', header: 'متن', width: '75%' },
      { field: 'date', header: 'تاریخ', width: '25%' },
    ];
    this.tempReporst = [
      { date: 'asdf', text: 'asdf', },
      { date: 'asdf', text: 'asdf', },
      { date: 'asdf', text: 'asdf', },
      { date: 'asdf', text: 'asdf', },
      { date: 'asdf', text: 'asdf', },
      { date: 'asdf', text: 'asdf', },
      { date: 'asdf', text: 'asdf', },
      { date: 'asdf', text: 'asdf', },
    ];
    this.totalRecords = this.tempReporst.length;

  }
  loadReports(event) {
    this.loading = true;
    console.log(event.first);
    console.log(event.rows);
    // this.reports = this.tempReporst.slice(event.first, event.first + event.rows)
    setTimeout(() => {
      if (this.tempReporst) {
        this.reports = this.tempReporst.slice(event.first, (event.first + event.rows));
        this.loading = false;
      }
    }, 1000);
  }
}
