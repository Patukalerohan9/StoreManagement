import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; 
import { GlobalRoutingModule } from './global-routing.module';
import { FormComponent } from './form/form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustdetailsComponent } from './custdetails/custdetails.component';
import { UpdateComponent } from './update/update.component';
import { EmployeeComponent } from './employee/employee.component';
import { InventoryoutdoorComponent } from './inventoryoutdoor/inventoryoutdoor.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    FormComponent,
    DashboardComponent,
    CustdetailsComponent,
    UpdateComponent,
    EmployeeComponent,
    InventoryoutdoorComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    GlobalRoutingModule,
    ReactiveFormsModule,
  ]
})
export class GlobalModule { }
