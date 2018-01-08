import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-author-topic',
  templateUrl: './author-topic.component.html',
  styleUrls: ['./author-topic.component.css']
})
export class AuthorTopicComponent implements OnInit {
  @Input() topicList: any;
  constructor() { }

  ngOnInit() {
    this.topicList = [
      { title: '', id: '', author: {loginname: 'admin'}}
    ];
  }

}
