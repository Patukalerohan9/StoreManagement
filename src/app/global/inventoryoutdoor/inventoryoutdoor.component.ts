import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inventoryoutdoor',
  standalone: false,
  templateUrl: './inventoryoutdoor.component.html',
  styleUrl: './inventoryoutdoor.component.scss'
})
export class InventoryoutdoorComponent implements OnInit {
  outsourceForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.outsourceForm = this.fb.group({
      assignedDate: [new Date().toISOString().split('T')[0]],
      customerName: ['', Validators.required],
      customerMobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      outsourceType: ['', Validators.required],
      vendorName: [''],
      vendorContact: [''],
      vendorMobile: [''],
      vendorAddress: [''],
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

  ngOnInit(): void {
    // Fetch customer data from sessionStorage
    const customer = sessionStorage.getItem('outsourceCustomer');
    if (customer) {
      const customerData = JSON.parse(customer);

      // Patch values into the form
      this.outsourceForm.patchValue({
        customerName: customerData.name,
        customerMobile: customerData.mobile,
        // Optional: You can also pre-select outsourceType based on status if needed
        // outsourceType: 'Stitching'
      });
    }

    // Watch cost & advance to auto-calculate balance
    this.outsourceForm.valueChanges.subscribe(val => {
      const cost = val.estimatedCost || 0;
      const adv = val.advancePaid || 0;
      this.outsourceForm.patchValue({ balanceAmount: cost - adv }, { emitEvent: false });
    });
  }

  updateBalance() {
    const cost = this.outsourceForm.get('estimatedCost')?.value || 0;
    const advance = this.outsourceForm.get('advancePaid')?.value || 0;
    this.outsourceForm.patchValue({ balanceAmount: cost - advance });
  }

  onSubmit() {
    if (this.outsourceForm.valid) {
      console.log('Outsource Data:', this.outsourceForm.getRawValue());
      alert('Outsource entry submitted successfully!');
      this.outsourceForm.reset({ paymentStatus: 'Pending', workStatus: 'Assigned' });
    } else {
      alert('Please fill all required fields.');
    }
  }
}
