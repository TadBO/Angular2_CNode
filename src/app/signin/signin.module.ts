import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin.component';
import { RouterModule } from '@angular/router';
import { signinRouter } from './signin.router';
import { PublicModule } from '../common/common.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(signinRouter),
    PublicModule,
    FormsModule
  ],
  declarations: [
    SigninComponent
  ]
})
export class SigninModule { }
