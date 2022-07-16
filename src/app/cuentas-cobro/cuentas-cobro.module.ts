import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudCuentasCobroComponent } from './pages/crud-cuentas-cobro/crud-cuentas-cobro.component';
import { TablaCuentasCobroComponent } from './pages/tabla-cuentas-cobro/tabla-cuentas-cobro.component';

@NgModule({
  declarations: [
  
    CrudCuentasCobroComponent,
       TablaCuentasCobroComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CuentasCobroModule { }
