/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LoginOComponent } from './login-o.component';

describe('LoginOComponent', () => {
  let component: LoginOComponent;
  let fixture: ComponentFixture<LoginOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
