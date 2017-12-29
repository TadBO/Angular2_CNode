import { TopiclistComponent } from './topiclist/topiclist.component';

export const topicRouters = [
  {
    path: '',
    redirectTo: 'topic/all',
    pathMatch: 'full'
  },
  {
    path: 'topic/:topic',
    component: TopiclistComponent
  }
];
