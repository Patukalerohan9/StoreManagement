import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; 
import { GlobalRoutingModule } from './global-routing.module';
import { FormComponent } from './form/form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustdetailsComponent } from './custdetails/custdetails.component';
import { UpdateComponent } from './update/update.component';


@NgModule({
  declarations: [
    FormComponent,
    DashboardComponent,
    CustdetailsComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    GlobalRoutingModule,
    ReactiveFormsModule
  ]
})
export class GlobalModule { }
