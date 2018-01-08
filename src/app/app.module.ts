import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { appRouters } from './app.routers';
import { ToTopComponent } from './common/to-top/to-top.component';





@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ToTopComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(appRouters),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
