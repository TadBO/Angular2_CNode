import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorTopicComponent } from './author-topic.component';

describe('AuthorTopicComponent', () => {
  let component: AuthorTopicComponent;
  let fixture: ComponentFixture<AuthorTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
