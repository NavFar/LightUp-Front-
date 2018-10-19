import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
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
}
