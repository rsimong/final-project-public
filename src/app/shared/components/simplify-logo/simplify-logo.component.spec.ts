import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplifyLogoComponent } from './simplify-logo.component';

describe('SimplifyLogoComponent', () => {
  let component: SimplifyLogoComponent;
  let fixture: ComponentFixture<SimplifyLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplifyLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplifyLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
