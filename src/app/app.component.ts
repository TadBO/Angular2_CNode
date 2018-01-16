import { Component, HostListener, OnInit } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public isShow: boolean;
  public userData: object;
  public unReadNum: number;
  title = 'app';
  constructor(public http: Http) {
    this.isShow = false;
  }
  public scroll(event) {
    console.log(event);
  }
  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userData'));
    console.log(this.userData);
    setInterval(() => {
      this.unReadMsg();
    }, 2000);
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (scrollY >= 300) {
      this.isShow = true;
    }else {
      this.isShow = false;
    }
  }
  public signout() {
    localStorage.clear();
    location.href = './';
  }
  public unReadMsg() {
    const params = new URLSearchParams();
    params.set('accesstoken', '59875702-9e3a-4b17-9f68-758904fea978');
    const url = 'https://cnodejs.org/api/v1/message/count';
    this.http.get(url, {search: params}).subscribe(
      rep => {
        this.unReadNum = rep.json().data;
      }
    );
  }
}
