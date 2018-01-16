import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-to-top',
  templateUrl: './to-top.component.html',
  styleUrls: ['./to-top.component.css']
})
export class ToTopComponent implements OnInit {
  public timer: any;
  constructor() {
  }

  ngOnInit() {
  }
  public toTop() {
    this.timer = setInterval(() => {
      this.runToTop();
    }, 1);
  }
  public runToTop() {
    let currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
    currentPosition -=  10;
    if (currentPosition > 0) {
      window.scrollTo(0, currentPosition);
    } else {
      window.scrollTo(0, 0);
      clearInterval(this.timer);
    }
  }
}
