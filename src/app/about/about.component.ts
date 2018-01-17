import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animations/fade-in';
import {flyIn} from '../animations/fly-in';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [flyIn]
})
export class AboutComponent implements OnInit {
  public authorInfo: object;
  public userData: object;
  constructor() {
    this.userData = JSON.parse(localStorage.getItem('userData'));
    if (this.userData) {
      this.authorInfo = this.userData;
      console.log(this.authorInfo);
    }
  }

  ngOnInit() {
  }

}
