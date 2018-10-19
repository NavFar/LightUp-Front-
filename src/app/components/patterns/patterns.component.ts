import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patterns',
  templateUrl: './patterns.component.html',
  styleUrls: ['./patterns.component.css']
})
export class PatternsComponent implements OnInit {
  cols: any[];
  patterns: any[];
  tempPatterns: any[];
  loading: boolean;
  totalRecords: number;

  constructor() { }

  ngOnInit() {
    this.loading = true;
    this.patterns = [];
    this.cols = [
      { field: 'name', header: 'نام', width: '75%' },
      { field: 'active', header: 'فعال', width: '25%' },
    ];
    this.tempPatterns = [
      { name: 'asasdfasdfasdfasdfasdfasdfasfsddf', active: 'asdf', },
      { name: 'asdf', active: 'asdf', },
      { name: 'asdf', active: 'asdf', },
      { name: 'asdf', active: 'asdf', },
      { name: 'asdf', active: 'asdf', },
      { name: 'asdf', active: 'asdf', },
      { name: 'asdf', active: 'asdf', },
      { name: 'asdf', active: 'asdf', },
    ];
    this.totalRecords = this.tempPatterns.length;

  }
  loadPatterns(event) {
    this.loading = true;
    console.log(event.first);
    console.log(event.rows);
    setTimeout(() => {
      if (this.tempPatterns) {
        this.patterns = this.tempPatterns.slice(event.first, (event.first + event.rows));
        this.loading = false;
      }
    }, 1000);
  }
}
