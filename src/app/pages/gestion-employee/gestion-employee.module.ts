import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionEmployeeRoutingModule } from './gestion-employee-routing.module';
import { GestionEmployeeComponent } from './gestion-employee.component';
import { ListComponent } from './list/list.component';
import { ClientService } from '../../services/clientservice';
import { HttpClientModule } from '@angular/common/http';
import { AddComponent } from './add/add.component';
import { HotelService } from '../../services/hotel.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GestionEmployeeComponent,
    ListComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    GestionEmployeeRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ ClientService, HotelService]
})
export class GestionEmployeeModule { }
