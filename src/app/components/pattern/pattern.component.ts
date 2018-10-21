import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pattern',
  templateUrl: './pattern.component.html',
  styleUrls: ['./pattern.component.css']
})
export class PatternComponent implements OnInit {
  title: string;
  dialogHeader: string;
  showDialog: boolean;
  rooms: any[];
  constructor() { }

  ngOnInit() {
    this.showDialog = false;
    this.title = "افزودن الگو";
    this.dialogHeader = "انتخاب کنید.";
    this.rooms = [
      { name: "خواب", value: 0 },
      { name: "خواب", value: 0 },
      { name: "خواب", value: 0 },
      { name: "خواب", value: 0 },
      { name: "خواب", value: 0 },
      { name: "خواب", value: 0 },
      { name: "خواب", value: 0 },
      { name: "خواب", value: 0 },
      { name: "خواب", value: 0 },
      { name: "خواب", value: 0 },
      { name: "خواب", value: 0 },
      { name: "خواب", value: 0 },
      { name: "خواب", value: 0 },

    ];
  }
  add() {
    this.showDialog = true;
  }
}
