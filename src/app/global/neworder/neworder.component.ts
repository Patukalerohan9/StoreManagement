import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-neworder',
  standalone: false,
  templateUrl: './neworder.component.html',
  styleUrl: './neworder.component.scss'
})
export class NeworderComponent implements OnInit {
  orderForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.orderForm = this.fb.group({
      name: ['', Validators.required],
      number: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      address: ['', Validators.required],
      dressType: ['', Validators.required],
      stitchType: ['', Validators.required],
      date: [new Date().toISOString().substring(0, 10), Validators.required]
    });
  }

  onSubmit(): void {
    if (this.orderForm.valid) {
      console.log('Order Created:', this.orderForm.value);
      alert('Order created successfully! Thank you for submitting your details.');
      this.orderForm.reset({
        date: new Date().toISOString().substring(0, 10)
      });
    } else {
      alert('Please fill all required fields correctly.');
    }
  }
}