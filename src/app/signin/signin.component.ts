import { Component, OnInit } from '@angular/core';
import { User } from './model/user-model';
import { Http, URLSearchParams } from '@angular/http';
import {Router} from '@angular/router';
import { fadeIn } from '../animations/fade-in';
import {flyIn} from '../animations/fly-in';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  animations: [flyIn]
})
export class SigninComponent implements OnInit {
  public user: User = new User();
  public error: Error;
  constructor(public http: Http, public router: Router) { }

  ngOnInit() {
  }
  public onSubmit(f) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
    if (!f.valid) {
      alert('请输入正确的用户名或密码');
      return false;
    }
    const url = 'https://cnodejs.org/api/v1/accesstoken';
    const params = new URLSearchParams();
    params.set('name', f.value.name);
    params.set('pass', String(f.value.pass));
    params.set('accesstoken', '59875702-9e3a-4b17-9f68-758904fea978');
    this.http.post(url, params).subscribe(res => {
      console.log(res.json());
      const userData = res.json();
      if (userData.success) {
        alert('登陆成功！');
        localStorage.setItem('userData', JSON.stringify(userData));
        location.href = './';
      }
    });
  }
}
