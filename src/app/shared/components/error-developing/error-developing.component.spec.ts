import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorDevelopingComponent } from './error-developing.component';

describe('ErrorDevelopingComponent', () => {
  let component: ErrorDevelopingComponent;
  let fixture: ComponentFixture<ErrorDevelopingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorDevelopingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorDevelopingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
