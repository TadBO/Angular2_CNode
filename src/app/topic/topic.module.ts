import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TopiclistComponent } from './topiclist/topiclist.component';
import { topicRouters } from './topic.routers';
import { Classify } from '../utils/classify';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(topicRouters)
  ],
  declarations: [ TopiclistComponent,Classify]
})
export class TopicModule { }
