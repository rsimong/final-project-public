import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalApplicationSettingsComponent } from './modal-application-settings.component';

describe('ModalApplicationSettingsComponent', () => {
  let component: ModalApplicationSettingsComponent;
  let fixture: ComponentFixture<ModalApplicationSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalApplicationSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalApplicationSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
