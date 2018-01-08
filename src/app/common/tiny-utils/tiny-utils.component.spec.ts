import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TinyUtilsComponent } from './tiny-utils.component';

describe('TinyUtilsComponent', () => {
  let component: TinyUtilsComponent;
  let fixture: ComponentFixture<TinyUtilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TinyUtilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TinyUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
