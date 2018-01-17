import { Component, OnInit, AfterViewInit , OnDestroy } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Topic } from './model/topic-model';
import { Router, ActivatedRoute } from '@angular/router';
import { fadeIn } from '../animations/fade-in';

declare var tinymce: any;

@Component({
  selector: 'app-creat',
  templateUrl: './creat.component.html',
  styleUrls: ['./creat.component.css'],
  animations: [fadeIn]
})
export class CreatComponent implements OnInit, AfterViewInit, OnDestroy {
  public editor;
  public msg: string;
  public topic: Topic = new Topic();
  public userName: string;
  public id: string;
  constructor(public http: Http, public router: Router, public activatedRoute: ActivatedRoute) {
    this.userName = JSON.parse(localStorage.getItem('userData')).loginname;
  }
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(
      querys => {
        this.updataTopic(querys.id);
        this.id = querys.id;
      }
    );
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
  public onSubmit(f, id) {
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
    let url;
    if (id) {
      url = 'https://cnodejs.org/api/v1/topics/update';
      f.value.topic_id = id;
    } else {
      url = 'https://cnodejs.org/api/v1/topics';
    }
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
  public updataTopic(id) {
    // 存在id时才是需要跟新主题的，偷懒的写法
    if (id) {
      const url = `https://cnodejs.org/api/v1/topic/${id}`;
      this.http.get(url).subscribe(
        rep => {
          console.log(rep.json());
          this.topic = rep.json().data;
          const str = rep.json().data.content.replace(/<[^>]+>/g, '');
          tinymce.activeEditor.setContent(str);
        }
      );
    }
  }
  ngOnDestroy() {
    tinymce.remove(this.editor);
  }

}
