export const appRouters = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'topic',
    loadChildren: './topic/topic.module#TopicModule'
  }
];
