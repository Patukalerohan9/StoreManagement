import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee',
  standalone: false,
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent{
  monitorForm: FormGroup;
  records: any[] = [];
  employees = ['Asha', 'Priya', 'Meena', 'Ravi', 'Kiran'];

  constructor(private fb: FormBuilder) {
    const today = new Date().toISOString().split('T')[0];

    this.monitorForm = this.fb.group({
      workDate: [today],
      employee: [''],
      Cutomer:[''],
      workType: [''],
      priority: [''],
      status: ['Assigned'],
      paymentType: ['200']
    });
  }

 updateRecord(index: number) {
  const record = this.records[index];
  alert(`Record for ${record.employee} updated to status: ${record.status || 'Assigned'}`);
}

// Handle status change manually
onStatusChange(index: number, event: Event) {
  const select = event.target as HTMLSelectElement;
  this.records[index].status = select.value;
}

  onSubmit() {
  if (this.monitorForm.invalid) return;

  const newRecord = {
    workDate: this.monitorForm.value.workDate,
    Cutomer: this.monitorForm.value.Cutomer,
    employee: this.monitorForm.value.employee,
    workType: this.monitorForm.value.workType,
    priority: this.monitorForm.value.priority,
    status: 'Assigned',
  };

  this.records.push(newRecord);
  this.monitorForm.reset();
}


}

