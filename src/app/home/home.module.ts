import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { homeRouters } from './home.routers';
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
    AuthorTopicComponent
  ]
})
export class HomeModule { }
