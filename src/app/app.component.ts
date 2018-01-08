import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isShow: boolean;
  title = 'app';
  constructor() {
    this.isShow = false;
  }
  public scroll(event) {
    console.log(event);
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (scrollY >= 500) {
      this.isShow = true;
    }else {
      this.isShow = false;
    }
  }
}
