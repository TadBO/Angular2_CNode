import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnodeAboutComponent } from './cnode-about.component';

describe('CnodeAboutComponent', () => {
  let component: CnodeAboutComponent;
  let fixture: ComponentFixture<CnodeAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnodeAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnodeAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
