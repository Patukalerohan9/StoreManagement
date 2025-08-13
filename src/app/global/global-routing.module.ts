import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustdetailsComponent } from './custdetails/custdetails.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
{ path: 'form', component: FormComponent },
{ path: 'custdetails', component: CustdetailsComponent },
{ path: 'update', component: UpdateComponent },
 { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // Default route
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GlobalRoutingModule { }
