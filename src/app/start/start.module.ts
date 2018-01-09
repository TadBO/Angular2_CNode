import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { startRouters } from './start.router';
import { StartComponent } from './start.component';
import { PublicModule } from '../common/common.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(startRouters),
    PublicModule
  ],
  declarations: [
    StartComponent
  ]
})
export class StartModule { }
