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
  },
  {
    path: 'getstart',
    loadChildren: './start/start.module#StartModule'
  },
  {
    path: 'about',
    loadChildren: './about/about.module#AboutModule'
  },
  {
    path: 'signin',
    loadChildren: './signin/signin.module#SigninModule'
  }
];
