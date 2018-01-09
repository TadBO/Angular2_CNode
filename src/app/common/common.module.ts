import { NgModule } from '@angular/core';
import { AdComponent} from './ad/ad.component';
import { GithubSigninComponent } from './github-signin/github-signin.component';
import { LinkComponent } from './link/link.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CnodeAboutComponent } from './cnode-about/cnode-about.component';
import { CreateTopicComponent } from './create-topic/create-topic.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],
  declarations: [
    AdComponent,
    GithubSigninComponent,
    LinkComponent,
    CnodeAboutComponent,
    CreateTopicComponent
  ],
  exports: [
    AdComponent,
    GithubSigninComponent,
    LinkComponent,
    CnodeAboutComponent,
    CreateTopicComponent
  ],
  providers: [],
})
export class PublicModule { }
