import { Component, OnInit, AfterViewInit , OnDestroy } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { TopicModel } from '../model/topic-model';
import { fadeIn } from '../../animations/fade-in';

declare var tinymce: any;
@Component({
  selector: 'app-topic-detail',
  templateUrl: './topic-detail.component.html',
  styleUrls: ['./topic-detail.component.css'],
  animations: [fadeIn]
})
export class TopicDetailComponent implements OnInit, AfterViewInit, OnDestroy {
  public editor;
  public id: number;
  public detailsData: TopicModel = new TopicModel();
  public userData: object;
  public queryName: string;
  public accessToken: string;
  public isClolected: string;
  public isUped: boolean;
  public isShow: boolean;
  public showId: number;
  public tinyMsg: string;
  public replayMsg: string;
  constructor(public http: Http, public activatedRoute: ActivatedRoute) {
    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.isUped = true;
    this.isShow = false;
    this.showId = 0;
    if (this.userData) {
      this.accessToken = '59875702-9e3a-4b17-9f68-758904fea978';
    } else {
      this.userData = {
        loginname: ''
      };
    }
  }

  ngOnInit() {
    console.log(this.detailsData);
    this.activatedRoute.queryParams.subscribe(
      querys => {
        console.log(querys);
        this.queryName = querys.name;
      }
    );
    this.activatedRoute.params.subscribe(
      params => {
        this.id = params.id;
        console.log(this.id);
        this.loadDatail(this.id);
      }
    );
  }
  // 初始化编辑器
  ngAfterViewInit() {
    tinymce.init({
      selector: '#post_editor',
      plugins: ['link', 'table'],
      skin_url: '../../assets/skins/lightgray',
      setup: editor => {
        this.editor = editor;
        editor.on('keyup change', () => {
          const content = editor.getContent({format: 'text'});
          this.replayMsg = content;
          console.log(content);
        });
      }
    });
  }
  // 获取详情信息
  public loadDatail(id: number) {
    console.log(id);
    const params = new URLSearchParams();
    params.set('accesstoken', this.accessToken);
    const localUrl = `https://cnodejs.org/api/v1/topic/${id}`;
    this.http.get(localUrl, { search: params }).subscribe(data => {
      const detailData = data.json();
      if (detailData.success) {
        detailData.data.id = false;
        console.log(detailData);
        if (detailData.data.is_collect) {
          this.isClolected = '取消收藏';
        } else {
          this.isClolected = '收藏';
        }
        this.detailsData = detailData.data;
      } else {
        alert('服务器异常');
      }
    });
  }
  // 收藏与取消收藏
  public collected() {
    const urlCllocted = 'https://cnodejs.org/api/v1/topic_collect/collect';
    const urlCancle = 'https://cnodejs.org/api/v1//topic_collect/de_collect';
    const params = new URLSearchParams();
    params.set('accesstoken', this.accessToken);
    params.set('topic_id', String(this.id));
    if ( !this.detailsData.is_collect) {
      this.http.post(urlCllocted, params).subscribe(rep => {
        console.log(rep.json());
      });
      this.isClolected = '取消收藏';
      this.detailsData.is_collect = true;
    } else {
      this.http.post(urlCancle, params).subscribe(rep => {
        console.log(rep.json());
        this.isClolected = '收藏';
        this.detailsData.is_collect = false;
      });
    }
  }
  // 点赞功能
  public doUps(id, name, event) {
    if ( !name ) {
      alert('请先登陆，登陆后及可点赞');
      return false;
    } else if (name === this.queryName) {
      alert('呵呵，自己不可以给自己点赞');
      return false;
    }
    let length = Number(event.target.innerText);
    const url = `https://cnodejs.org/api/v1/reply/${id}/ups`;
    const params = new URLSearchParams();
    params.set('accesstoken', this.accessToken);
    this.http.post(url, params).subscribe(rep => {
      console.log(rep.json());
      if ( rep.json().success) {
        if ( rep.json().action === 'up' ) {
          length++;
          event.target.setAttribute('class', 'icon-good-filling iconfont');
        } else {
          length--;
          event.target.setAttribute('class', 'icon-good iconfont');
        }
        event.target.innerText = ' ' + length;
      }
    });
  }
  // 回复功能
  public showReply(id) {
    this.showId = id;
    if ( this.isShow ) {
      this.isShow = false;
      this.tinyMsg = '';
    } else {
      this.isShow = true;
    }
  }
  // 获取子组件编辑器的返回的消息
  public getTinyMsg(event) {
    this.tinyMsg = event;
    console.log(this.tinyMsg);
  }
  // 评论主题
  public replayTopic(id) {
    const replayUrl = `https://cnodejs.org/api/v1/topic/${this.id}/replies`;
    const params = new URLSearchParams();
    params.set('accesstoken', '59875702-9e3a-4b17-9f68-758904fea978');
    console.log(id);
    // 回复他人的评论
    if ( id ) {
      params.set('reply_id', id);
      params.set('content', this.tinyMsg);
      if ( !this.tinyMsg) {
        alert('回复不能为空');
        return false;
      }
    } else {
      params.set('content', this.replayMsg);
      if ( !this.replayMsg) {
        alert('回复不能为空');
        return false;
      }
    }
    this.http.post(replayUrl, params).subscribe(
      rep => {
        console.log(rep.json());
        if (rep.json().success) {
          window.location.reload();
        }
      }
    );
  }
  ngOnDestroy() {
    tinymce.remove(this.editor);
  }
}
