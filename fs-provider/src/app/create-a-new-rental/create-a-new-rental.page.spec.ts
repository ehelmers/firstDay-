import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateANewRentalPage } from './create-a-new-rental.page';

describe('CreateANewRentalPage', () => {
  let component: CreateANewRentalPage;
  let fixture: ComponentFixture<CreateANewRentalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateANewRentalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateANewRentalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
