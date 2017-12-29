import { Component, OnInit } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { TopicModel } from '../model/topic-model';

@Component({
  selector: 'app-topic-detail',
  templateUrl: './topic-detail.component.html',
  styleUrls: ['./topic-detail.component.css']
})
export class TopicDetailComponent implements OnInit {
  public id: number;
  public detailsData: TopicModel = new TopicModel();
  constructor(public http: Http, public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.id = params.id;
        console.log(this.id);
        this.loadDatail(this.id);
      }
    );
  }
  public loadDatail(id: number) {
    console.log(id);
    const localUrl = `https://cnodejs.org/api/v1/topic/${id}`;
    this.http.get(localUrl).subscribe(data => {
      const detailData = data.json();
      if (detailData.success) {
        console.log(detailData);
        this.detailsData = detailData.data;
      } else {
        alert('服务器异常');
      }
    });
  }

}