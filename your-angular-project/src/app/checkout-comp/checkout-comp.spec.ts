import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutComp } from './checkout-comp';

describe('CheckoutComp', () => {
  let component: CheckoutComp;
  let fixture: ComponentFixture<CheckoutComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckoutComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutComp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
