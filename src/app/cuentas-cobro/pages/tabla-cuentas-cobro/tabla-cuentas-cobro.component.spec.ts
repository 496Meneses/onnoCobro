import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaCuentasCobroComponent } from './tabla-cuentas-cobro.component';

describe('TablaCuentasCobroComponent', () => {
  let component: TablaCuentasCobroComponent;
  let fixture: ComponentFixture<TablaCuentasCobroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaCuentasCobroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaCuentasCobroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
