import { HomeComponent } from './home.component';

export const homeRouters = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        loadChildren: '../topic/topic.module#TopicModule'
      }
    ]
  }
];
