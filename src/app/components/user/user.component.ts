import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  title: string;
  id: any;
  constructor(private route: ActivatedRoute, private router: Router, ) { }

  ngOnInit() {
    this.title = "افزودن کاربر";
    this.id = this.route.snapshot.paramMap.get('id');
    if (!Number(this.id))
      this.router.navigate(['/menu']);
    console.log(this.id);
  }

}
