import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-to-top',
  templateUrl: './to-top.component.html',
  styleUrls: ['./to-top.component.css']
})
export class ToTopComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
  public toTop() {
    document.documentElement.scrollTop = document.body.scrollTop = 0;
  }
}
