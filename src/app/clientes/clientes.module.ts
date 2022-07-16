import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaClientesComponent } from './pages/tabla-clientes/tabla-clientes.component';
import { CrudClienteComponent } from './pages/crud-cliente/crud-cliente.component';



@NgModule({
  declarations: [
    TablaClientesComponent,
    CrudClienteComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ClientesModule { }
