import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { homeRouters } from './home.routers';
import { GithubSigninComponent } from '../common/github-signin/github-signin.component';
import { AdComponent } from '../common/ad/ad.component';
import { LinkComponent } from '../common/link/link.component';
import { AuthorInfoComponent } from '../common/author-info/author-info.component';
import { AuthorTopicComponent } from '../common/author-topic/author-topic.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeRouters)
  ],
  declarations: [
    HomeComponent,
    GithubSigninComponent,
    AdComponent,
    LinkComponent,
    AuthorInfoComponent,
    AuthorTopicComponent
  ]
})
export class HomeModule { }
