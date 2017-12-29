import { Component, OnInit } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-topiclist',
  templateUrl: './topiclist.component.html',
  styleUrls: ['./topiclist.component.css']
})
export class TopiclistComponent implements OnInit {
  public tab: string;
  public page: number;
  public limit: number;
  public listData: any;
  constructor( public activatedRoute: ActivatedRoute, public http: Http) {
    this.page = 1;
    this.limit = 40;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.tab = params.topic;
        this.loadData(this.tab, this.page, this.limit);
      }
    );
  }
  public loadData(tab, page, limit) {
    const localUrl = 'https://cnodejs.org/api/v1/topics';
    const params = new URLSearchParams();
    params.set('tab', tab);
    params.set('page', String(page));
    params.set('limit', String(limit));
    this.http.get(localUrl, {search: params}).subscribe(
      data => {
        const dataList = data.json();
        if (dataList.success) {
          this.listData = data.json().data;
          console.log(this.listData);
        }else {
          alert('服务器异常');
        }
      }
    );
  }
}
