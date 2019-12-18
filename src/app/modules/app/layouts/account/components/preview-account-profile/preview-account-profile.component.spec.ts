import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewAccountProfileComponent } from './preview-account-profile.component';

describe('PreviewAccountProfileComponent', () => {
  let component: PreviewAccountProfileComponent;
  let fixture: ComponentFixture<PreviewAccountProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewAccountProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewAccountProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
