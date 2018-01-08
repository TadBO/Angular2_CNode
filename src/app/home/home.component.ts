import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public isShow: boolean;
  public authorInfo: object;
  public listData: any;
  constructor(public http: Http) {
    this.isShow = true;
  }

  ngOnInit() {
  }
  public onActivate(event) {
    console.log(event);
    if (event.activatedRoute.snapshot.url[0].path === 'topic') {
      this.isShow = true;
    } else {
      this.isShow = false;
      const loginname = event.activatedRoute.queryParams.value.name;
      const url = 'https://cnodejs.org/api/v1/user/' + loginname;
      this.http.get(url).subscribe(
        data => {
          console.log(data.json());
          this.authorInfo = data.json().data;
          this.listData = data.json().data.recent_replies;
        }
      );
    }
  }
  public onDeactivate(event) {
    console.log(event);
  }
}
