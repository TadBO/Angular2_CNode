import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-author-info',
  templateUrl: './author-info.component.html',
  styleUrls: ['./author-info.component.css']
})
export class AuthorInfoComponent implements OnInit {
  @Input() data: object;
  constructor() {
  }

  ngOnInit() {
    this.data = {
      loginname: 'admin',
      score: 0,
      avatar_url: ''
    };
  }

}
