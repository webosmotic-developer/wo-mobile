import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TchnologiesPage } from './tchnologies.page';

describe('TchnologiesPage', () => {
  let component: TchnologiesPage;
  let fixture: ComponentFixture<TchnologiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TchnologiesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TchnologiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
