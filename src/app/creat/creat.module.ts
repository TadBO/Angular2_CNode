import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatComponent } from './creat.component';
import { RouterModule } from '@angular/router';
import { creatRouter } from './creat.router';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(creatRouter),
    FormsModule
  ],
  declarations: [CreatComponent]
})
export class CreatModule { }
