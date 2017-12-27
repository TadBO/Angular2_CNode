import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { homeRouters } from './home.routers';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeRouters)
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
