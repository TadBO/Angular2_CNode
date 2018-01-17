import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { fadeIn } from '../animations/fade-in';
import { flyIn } from '../animations/fly-in';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [fadeIn, flyIn]
})
export class HomeComponent implements OnInit {
  public isShow: boolean;
  public authorInfo: object;
  public listData: any;
  public userData: object;
  constructor(public http: Http) {
    this.isShow = true;
  }

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userData'));
    if (this.userData) {
      this.authorInfo = this.userData;
      console.log(this.authorInfo);
    }
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
          const tData = data.json().data;
          tData.id = '';
          this.authorInfo = tData;
          console.log(this.authorInfo);
          this.listData = data.json().data.recent_replies;
        }
      );
    }
  }
  public onDeactivate(event) {
    console.log(event);
    this.authorInfo = this.userData;
  }
}
