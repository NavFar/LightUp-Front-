import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  title: string;
  ports: SelectItem[];
  types: SelectItem[];
  inputPort: string;
  outputPort: string;
  inputType: string;
  outputType: string;
  constructor() { }

  ngOnInit() {
    this.types = [{ label: 'مستقیم', value: "1" },];
    this.ports = [
      { label: 'شماره ۱', value: 1 },
      { label: 'شماره ۲', value: 2 },
      { label: 'شماره ۳', value: 3 },
      { label: 'شماره ۴', value: 4 },
      { label: 'شماره ۵', value: 5 },
      { label: 'شماره ۶', value: 6 },
      { label: 'شماره ۷', value: 7 },
      { label: 'شماره ۸', value: 8 },
      { label: 'شماره ۹', value: 9 },
      { label: 'شماره ۱۰', value: 10 },
      { label: 'شماره ۱۱', value: 11 },
      { label: 'شماره ۱۲', value: 12 },
      { label: 'شماره ۱۳', value: 13 },
      { label: 'شماره ۱۴', value: 14 },
      { label: 'شماره ۱۵', value: 15 },
      { label: 'شماره ۱۶', value: 16 },
      { label: 'شماره ۱۷', value: 17 },
      { label: 'شماره ۱۸', value: 18 },
      { label: 'شماره ۱۹', value: 19 },
      { label: 'شماره ۲۰', value: 20 },
      { label: 'شماره ۲۱', value: 21 },
      { label: 'شماره ۲۲', value: 22 },
      { label: 'شماره ۲۳', value: 23 },
      { label: 'شماره ۲۴', value: 24 },
      { label: 'شماره ۲۵', value: 25 },
      { label: 'شماره ۲۶', value: 26 },
      { label: 'شماره ۲۷', value: 27 },
      { label: 'شماره ۲۸', value: 28 },
      { label: 'شماره ۲۹', value: 29 },
      { label: 'شماره ۳۰', value: 30 },
      { label: 'شماره ۳۱', value: 31 },
      { label: 'شماره ۳۲', value: 32 },
      { label: 'شماره ۳۳', value: 33 },
      { label: 'شماره ۳۴', value: 34 },
      { label: 'شماره ۳۵', value: 35 },
      { label: 'شماره ۳۶', value: 36 },
      { label: 'شماره ۳۷', value: 37 },
      { label: 'شماره ۳۸', value: 38 },
      { label: 'شماره ۳۹', value: 39 },
      { label: 'شماره ۴۰', value: 40 },
    ];

    this.title = "افزودن فضا"
  }

}
