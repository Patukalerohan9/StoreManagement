import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustdetailsComponent } from './custdetails/custdetails.component';
import { UpdateComponent } from './update/update.component';
import { InventoryoutdoorComponent } from './inventoryoutdoor/inventoryoutdoor.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
{ path: 'form', component: FormComponent },
{ path: 'custdetails', component: CustdetailsComponent },
{ path: 'update', component: UpdateComponent },
 { path: '', redirectTo: 'login', pathMatch: 'full' }, // Default route
  { path: 'dashboard', component: DashboardComponent },
   { path: 'employee', component: EmployeeComponent },
    { path: 'inventoryoutdoor', component: InventoryoutdoorComponent },
     { path: 'login', component: LoginComponent},
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GlobalRoutingModule { }
