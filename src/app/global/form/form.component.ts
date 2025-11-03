import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit {
  measurementForm!: FormGroup;
  customerData: any;

  constructor(private route: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.loadCustomerDetails(id);
    this.createForm();
  }

  loadCustomerDetails(id: any) {
    // Temporary mock — replace with actual service call later
    const mockData = [
      { id: 1, name: 'Anjali', number: '9876543210', dressType: 'Blouse', status: 'Pending with Measurement', deliveryDate: '2025-05-18', cost: 800 },
      { id: 2, name: 'Sneha', number: '9123456789', dressType: 'Chudidar', status: 'Pending with Measurement', deliveryDate: '2025-05-20', cost: 1200 },
      { id: 3, name: 'Sneha', number: '9123456789', dressType: 'Chudidar', status: 'Pending with Measurement', deliveryDate: '2025-05-20', cost: 1200 }
    ];
    this.customerData = mockData.find(x => x.id == id);
  }

  createForm() {
    this.measurementForm = this.fb.group({
      blouseLength: [''],
      shoulder: [''],
      chest: [''],
      waist: [''],
      sleeveLength: [''],
      deliveryDate: [''],
      paymentType: [''],
      cost: [0],
      advance: [0],
      balance: [{ value: 0, disabled: true }]
    });

    // auto-calculate balance
    this.measurementForm.valueChanges.subscribe(val => {
      const cost = val.cost || 0;
      const adv = val.advance || 0;
      this.measurementForm.patchValue(
        { balance: cost - adv },
        { emitEvent: false }
      );
    });
  }

  onSubmit() {
    if (this.measurementForm.valid) {
      const payload = {
        ...this.measurementForm.getRawValue(),
        customerId: this.customerData.id
      };
      console.log('Submitted Measurement + Payment:', payload);
      alert('Data saved successfully!');
    }
  }
}