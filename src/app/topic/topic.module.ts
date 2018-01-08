import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TopiclistComponent } from './topiclist/topiclist.component';
import { topicRouters } from './topic.routers';
import { Classify } from '../utils/classify';
import { LastReplay } from '../utils/lastReplay';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { NgModel } from '@angular/forms';
import { TopicDetailComponent } from './topic-detail/topic-detail.component';
import { TinyUtilsComponent } from '../common/tiny-utils/tiny-utils.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(topicRouters),
    PaginationModule.forRoot()
  ],
  declarations: [ TopiclistComponent, Classify, NgModel, LastReplay, TopicDetailComponent, TinyUtilsComponent ]
})
export class TopicModule { }
