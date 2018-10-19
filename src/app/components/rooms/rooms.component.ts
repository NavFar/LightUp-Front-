import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
    this.loading = true;
    this.rooms = [];
    this.cols = [
      { field: 'name', header: 'نام' },
    ];
    this.tempRooms = [
      { name: 'asdf', },
      { name: 'asdf', },
      { name: 'asdf', },
      { name: 'asdf', },
      { name: 'asdf', },
      { name: 'asdf', },
      { name: 'asdf', },
      { name: 'asdf', },
    ];
    this.totalRecords = this.tempRooms.length;
  }
  loadRooms(event) {
    this.loading = true;
    console.log(event.first);
    console.log(event.rows);
    setTimeout(() => {
      if (this.tempRooms) {
        this.rooms = this.tempRooms.slice(event.first, (event.first + event.rows));
        this.loading = false;
      }
    }, 1000);
  }
}
