import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataApiService } from '../../services/data-api.service';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
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
  name: string;
  constructor(private route: ActivatedRoute, private router: Router, private dataApiService: DataApiService, private messageService: MessageService) { }

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
  back() {
    this.router.navigate(['/rooms']);
  }
  submit() {
    if (!this.name) {
      this.messageService.add({ key: 'message', severity: 'warn', summary: 'عدم ثبت', detail: 'نام نباید خالی باشد.' });
      return;
    }
    if (!this.inputType) {
      this.messageService.add({ key: 'message', severity: 'warn', summary: 'عدم ثبت', detail: 'نوع ورودی نباید خالی باشد.' });
      return;
    }
    if (!this.inputPort) {
      this.messageService.add({ key: 'message', severity: 'warn', summary: 'عدم ثبت', detail: 'پورت ورودی نباید خالی باشد.' });
      return;
    }
    if (!this.outputType) {
      this.messageService.add({ key: 'message', severity: 'warn', summary: 'عدم ثبت', detail: ' نوع خروجی نباید خالی باشد.' });
      return;
    }
    if (!this.outputPort) {
      this.messageService.add({ key: 'message', severity: 'warn', summary: 'عدم ثبت', detail: 'پورت خروجی نباید خالی باشد.' });
      return;
    }
    this.dataApiService.addRoom(this.name, this.inputPort, this.inputType, this.outputPort, this.outputType).subscribe(
      (response) => {
        this.messageService.add({ key: 'message', severity: 'success', summary: 'ثبت', detail: 'فضا ثبت شد.' });
        this.router.navigate(['/rooms']);
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
