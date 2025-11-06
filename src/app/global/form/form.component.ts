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

  get dressType(): string {
    return this.customerData?.dressType || '';
  }

  loadCustomerDetails(id: string | null) {
    // Mock data
    const mockData = [
      { id: 1, name: 'Anjali', number: '9876543210', dressType: 'Blouse', status: 'Pending For Measurement', deliveryDate: '2025-05-18',StitchType:'New'  },
      { id: 2, name: 'Varsha', number: '9123456789', dressType: 'Dress', status: 'Pending For Measurement', deliveryDate: '2025-05-20',StitchType:'New' },
      { id: 3, name: 'Sneha', number: '9123456789', dressType: 'Blouse', status: 'Pending For Measurement', deliveryDate: '2025-05-20',StitchType:'New'  }
    ];

    // Convert id to number for comparison
    this.customerData = mockData.find(x => x.id === Number(id));

    if (this.customerData) {
      // Patch values to form
      this.measurementForm?.patchValue({
        deliveryDate: this.customerData.deliveryDate,
        cost: this.customerData.cost,
        status: this.customerData.status.trim()
      });
    } else {
      console.warn('Customer not found with id:', id);
    }
  } 
  

  createForm() {
    this.measurementForm = this.fb.group({
      status:[''],
      blouseLength: [''],
      blouseShoulder: [''],
      blouseChest: [''],
      blouseWaist: [''],
      sleeveLength: [''],
      sleeveArm: [''],
      sleeveCuff: [''],
      frontNeck: [''],
      backNeck: [''],
      topLength: [''],
      topShoulder: [''],
      halfBodyLength: [''],
      topChest: [''],
      topWaist: [''],
      hip: [''],
      topSleeveLength: [''],
      topSleeveArm: [''],
      topCuff: [''],
      topFrontNeck: [''],
      topBackNeck: [''],
      sideCut: [''],
      topGear: [''],
      pantLength: [''],
      pantBottom: [''],
      deliveryDate: [''],
      paymentType: [''],
      cost: [0],
      advance: [0],
      balance: [{ value: 0, disabled: true }]
    });

    this.measurementForm.valueChanges.subscribe(val => {
    const cost = val.cost || 0;
    const advance = val.advance || 0;
    this.measurementForm.patchValue(
      { balance: cost - advance },
      { emitEvent: false }  // prevent infinite loop
    );
  });
  }

  onSubmit() {
    if (this.measurementForm.valid) {
      const payload = {
        ...this.measurementForm.getRawValue(),
        customerId: this.customerData?.id
      };
      console.log('Submitted Measurement + Payment:', payload);
      alert('Data saved successfully!');
    }
  }
}