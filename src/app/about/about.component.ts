import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
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
