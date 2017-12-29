import { TopiclistComponent } from './topiclist/topiclist.component';
import { TopicDetailComponent } from './topic-detail/topic-detail.component';

export const topicRouters = [
  {
    path: '',
    redirectTo: 'topic/all',
    pathMatch: 'full'
  },
  {
    path: 'topic/:topic',
    component: TopiclistComponent
  },
  {
    path: 'topicDetail/:id',
    component: TopicDetailComponent
  }
];
