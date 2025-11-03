import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inventoryoutdoor',
  standalone: false,
  templateUrl: './inventoryoutdoor.component.html',
  styleUrl: './inventoryoutdoor.component.scss'
})
export class InventoryoutdoorComponent{
  outsourceForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.outsourceForm = this.fb.group({
      
      customerName: ['', Validators.required],
      customerMobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      outsourceType: ['', Validators.required],
      vendorName: [''],
      vendorContact: [''],
      vendorMobile: [''],
      vendorAddress: [''],
      assignedDate: [new Date().toISOString().split('T')[0]],
      expectedDate: [''],
      instructions: [''],
      estimatedCost: [0],
      advancePaid: [0],
      balanceAmount: [{ value: 0, disabled: true }],
      paymentStatus: ['Pending'],
      workStatus: ['Assigned'],
      receivedDate: [''],
      referenceImage: [''],
      workReceipt: ['']
    });
  }

  updateBalance() {
    const cost = this.outsourceForm.get('estimatedCost')?.value || 0;
    const advance = this.outsourceForm.get('advancePaid')?.value || 0;
    this.outsourceForm.patchValue({ balanceAmount: cost - advance });
  }

  onSubmit() {
    if (this.outsourceForm.valid) {
      console.log('Outsource Data:', this.outsourceForm.value);
      alert('Outsource entry submitted successfully!');
      this.outsourceForm.reset({ paymentStatus: 'Pending', workStatus: 'Assigned' });
    } else {
      alert('Please fill all required fields.');
    }
  }
}