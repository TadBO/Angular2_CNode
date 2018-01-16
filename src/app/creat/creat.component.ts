import { Component, OnInit, AfterViewInit , OnDestroy } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Topic } from './model/topic-model';
import { Router } from '@angular/router';

declare var tinymce: any;

@Component({
  selector: 'app-creat',
  templateUrl: './creat.component.html',
  styleUrls: ['./creat.component.css']
})
export class CreatComponent implements OnInit, AfterViewInit, OnDestroy {
  public editor;
  public msg: string;
  public topic: Topic = new Topic();
  public userName: string;
  constructor(public http: Http, public router: Router) {
    this.userName = JSON.parse(localStorage.getItem('userData')).loginname;
  }
  ngOnInit() {
  }

  ngAfterViewInit() {
    tinymce.init({
      selector: '#post_editor',
      plugins: ['link', 'table'],
      skin_url: '../../assets/skins/lightgray',
      setup: editor => {
        this.editor = editor;
        editor.on('keyup change', () => {
          const content = editor.getContent({format: 'text'});
          console.log(content);
          this.msg = content;
        });
      }
    });
  }
  public onSubmit(f) {
    f.value.content = this.msg;
    f.value.accesstoken = '59875702-9e3a-4b17-9f68-758904fea978';
    console.log(f.value);
    console.log(f);
    if (f.value.tab !== 'dev') {
     alert('测试请用客户端测试！');
     return false;
    }
    if (!f.valid || f.value.content === '') {
      alert('标题长度少于10或未输入内容！');
      return false;
    }
    const url = 'https://cnodejs.org/api/v1/topics';
    this.http.post(url, f.value).subscribe(rep => {
      console.log(rep);
      if (rep.json().success) {
        this.router.navigate(['/home/topicDetail', rep.json().topic_id], {
            queryParams: {
              name:  this.userName  }
          }
        );
      }
    });
  }
  ngOnDestroy() {
    tinymce.remove(this.editor);
  }

}
