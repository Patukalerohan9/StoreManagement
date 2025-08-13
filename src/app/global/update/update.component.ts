import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update',
  standalone: false,
  templateUrl: './update.component.html',
  styleUrl: './update.component.scss'
})
export class UpdateComponent implements OnInit {
  updateForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.updateForm = this.fb.group({
      name: ['', Validators.required],
      mobile: ['', Validators.required],
      dressType: ['', Validators.required],
      status: ['', Validators.required],
      deliveryDate: ['', Validators.required]
    });

    const editData = sessionStorage.getItem('editCustomer');
    if (editData) {
      this.updateForm.patchValue(JSON.parse(editData));
    }
  }

  onSubmit(): void {
    if (this.updateForm.valid) {
      console.log('Updated Customer:', this.updateForm.value);
      sessionStorage.removeItem('editCustomer');
      // Navigate or show success as needed
    }
  }
}