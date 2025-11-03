import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit {
  measurementForm!: FormGroup;
   
 

  constructor(private fb: FormBuilder,private router: Router) {}

  ngOnInit(): void {
    this.measurementForm = this.fb.group({
      date: [this.getTodayDate()],
      personalInfo: this.fb.group({
        name: [''],
        number:[''],
        address:[''],
        id: [''],
        date: ['']
      }),
      measurements: this.fb.group({
        bust: [''],
        waist: [''],
        hip:[''],
        length: [''],
        sleeve: ['']
      }),
      paymentInfo: this.fb.group({
        deliveryDate: [''],
        totalAmount: [''],
        amountPaid: [''],
        balance:[''],
      })
    });
  }

  onSubmit(): void {
  if (this.measurementForm.valid) {
    console.log('Form Submitted:', this.measurementForm.value);

    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'Form submitted successfully.',
      confirmButtonColor: '#3085d6'
    }).then(() => {
  
      this.router.navigate(['/custdetails']); 
    });

  } else {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Please fill in all required fields!',
      confirmButtonColor: '#d33'
    });
  }
}

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      console.log('Selected file:', file);
    }
  }

  getTodayDate(): string {
  const today = new Date();
  return today.toISOString().substring(0, 10); // Format: 'YYYY-MM-DD
}
}