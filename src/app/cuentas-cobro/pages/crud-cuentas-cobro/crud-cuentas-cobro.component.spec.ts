import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudCuentasCobroComponent } from './crud-cuentas-cobro.component';

describe('CrudCuentasCobroComponent', () => {
  let component: CrudCuentasCobroComponent;
  let fixture: ComponentFixture<CrudCuentasCobroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudCuentasCobroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudCuentasCobroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
