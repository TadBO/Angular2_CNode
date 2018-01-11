import { NgModule } from '@angular/core';
import { AdComponent} from './ad/ad.component';
import { GithubSigninComponent } from './github-signin/github-signin.component';
import { LinkComponent } from './link/link.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CnodeAboutComponent } from './cnode-about/cnode-about.component';
import { CreateTopicComponent } from './create-topic/create-topic.component';
import { AuthorInfoComponent } from './author-info/author-info.component';

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
    CreateTopicComponent,
    AuthorInfoComponent
  ],
  exports: [
    AdComponent,
    GithubSigninComponent,
    LinkComponent,
    CnodeAboutComponent,
    CreateTopicComponent,
    AuthorInfoComponent
  ],
  providers: [],
})
export class PublicModule { }
