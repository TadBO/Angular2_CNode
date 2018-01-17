import { Component, OnInit, Input } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { fadeIn } from '../../animations/fade-in';

@Component({
  selector: 'app-topiclist',
  templateUrl: './topiclist.component.html',
  styleUrls: ['./topiclist.component.css'],
  animations: [fadeIn]
})
export class TopiclistComponent implements OnInit {
  public tab: string;
  public page: number;
  public limit: number;
  public listData: any;
  public totalItems: number;
  public currentPage = 1;
  public smallnumPages = 0;
  constructor( public activatedRoute: ActivatedRoute, public http: Http) {
    this.limit = 40;
    this.totalItems = 400;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.tab = params.topic;
        this.page = 1;
        this.loadData(this.tab, this.page, this.limit);
        this.setPage(1);
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
        console.log(dataList);
        if (dataList.success) {
          this.listData = data.json().data;
          console.log(this.listData);
        }else {
          alert('服务器异常');
        }
      }
    );
  }
  public setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }
  public pageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
    this.page = event.page;
    this.loadData(this.tab, this.page, this.limit);
  }
}
