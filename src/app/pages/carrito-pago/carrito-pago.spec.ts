import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoPago } from './carrito-pago';

describe('CarritoPago', () => {
  let component: CarritoPago;
  let fixture: ComponentFixture<CarritoPago>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarritoPago],
    }).compileComponents();

    fixture = TestBed.createComponent(CarritoPago);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
