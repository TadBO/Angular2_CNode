import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { RouterModule } from '@angular/router';
import { aboutRouter } from './about.router';
import { PublicModule } from '../common/common.module';

@NgModule({
  imports: [
    CommonModule,
    PublicModule,
    RouterModule.forChild(aboutRouter)
  ],
  declarations: [
    AboutComponent
  ]
})
export class AboutModule { }
