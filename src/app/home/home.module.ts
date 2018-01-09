import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { homeRouters } from './home.routers';
import { AuthorInfoComponent } from '../common/author-info/author-info.component';
import { AuthorTopicComponent } from '../common/author-topic/author-topic.component';
import { PublicModule } from '../common/common.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeRouters),
    PublicModule
  ],
  declarations: [
    HomeComponent,
    AuthorInfoComponent,
    AuthorTopicComponent
  ]
})
export class HomeModule { }
