import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConnectAccountComponent } from './modal-connect-account.component';

describe('ModalConnectAccountComponent', () => {
  let component: ModalConnectAccountComponent;
  let fixture: ComponentFixture<ModalConnectAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalConnectAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalConnectAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
