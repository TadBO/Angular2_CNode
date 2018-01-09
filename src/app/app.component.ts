import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public isShow: boolean;
  public userData: object;
  title = 'app';
  constructor() {
    this.isShow = false;
  }
  public scroll(event) {
    console.log(event);
  }
  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userData'));
    console.log(this.userData);
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
}
