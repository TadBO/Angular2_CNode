import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { fadeIn } from '../animations/fade-in';
import { flyIn } from '../animations/fly-in';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  animations: [fadeIn, flyIn]
})
export class MessageComponent implements OnInit, OnDestroy {
  public authorInfo: object;
  public userData: object;
  public unReadMsg: any;
  public url: string;
  public readMsg: any;
  constructor( public http: Http) {
    this.userData = JSON.parse(localStorage.getItem('userData'));
    if (this.userData) {
      this.authorInfo = this.userData;
      console.log(this.authorInfo);
    }
    this.url = 'https://cnodejs.org/api/v1/';
    this.unReadMsg = [];
    this.readMsg = [];
  }
  ngOnInit() {
    this.loadUnreadMsg();
  }
  public readMessage() {
    const loadUrl = 'https://cnodejs.org/api/v1/message/mark_all';
    const readParams = new URLSearchParams();
    readParams.set('accesstoken', '59875702-9e3a-4b17-9f68-758904fea978');
    this.http.post(loadUrl, readParams).subscribe(
      rep => {
        console.log(rep.json());
      }
    );
  }
  public loadUnreadMsg() {
    this.url += 'messages';
    const params = new URLSearchParams();
    params.set('accesstoken', '59875702-9e3a-4b17-9f68-758904fea978');
    this.http.get(this.url, { search: params}).subscribe(
      rep => {
        console.log(rep.json());
        this.unReadMsg = rep.json().data.hasnot_read_messages;
        this.readMsg = rep.json().data.has_read_messages;
      }
    );
  }
  ngOnDestroy() {
    // 离开页面标记未读为已读
    this.readMessage();
  }
}
