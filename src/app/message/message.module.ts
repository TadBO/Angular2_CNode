import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message.component';
import { RouterModule } from '@angular/router';
import { messageRouter } from './message.routers';
import { PublicModule } from '../common/common.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(messageRouter),
    PublicModule
  ],
  declarations: [MessageComponent]
})
export class MessageModule { }
