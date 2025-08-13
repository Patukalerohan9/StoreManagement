import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-custdetails',
  standalone: false,
  templateUrl: './custdetails.component.html',
  styleUrl: './custdetails.component.scss'
})
export class CustdetailsComponent implements OnInit {
  searchForm!: FormGroup;
  page: number = 1;
  pageSize: number = 10;

  customers = [
    { name: 'Anjali', mobile: '9876543210', dressType: 'Blouse', status: 'Completed', deliveryDate: '2025-05-18' },
    { name: 'Sneha', mobile: '9123456789', dressType: 'Chudidar', status: 'In Progress', deliveryDate: '2025-05-20' },
    { name: 'Meera', mobile: '7894561230', dressType: 'Saree', status: 'Completed', deliveryDate: '2025-05-21' },
    { name: 'Divya', mobile: '9988776655', dressType: 'Lehenga', status: 'New', deliveryDate: '2025-05-22' },
    { name: 'Roshni', mobile: '9871234567', dressType: 'Kurti', status: 'Alteration', deliveryDate: '2025-05-23' },
    { name: 'Kavya', mobile: '9090909090', dressType: 'Gown', status: 'Completed', deliveryDate: '2025-05-24' },
    { name: 'Pooja', mobile: '9012345678', dressType: 'Chudidar', status: 'In Progress', deliveryDate: '2025-05-25' },
    { name: 'Lakshmi', mobile: '9080706050', dressType: 'Blouse', status: 'New', deliveryDate: '2025-05-26' },
    { name: 'Radha', mobile: '9029384756', dressType: 'Saree', status: 'Alteration', deliveryDate: '2025-05-27' },
    { name: 'Geeta', mobile: '9988665544', dressType: 'Lehenga', status: 'Completed', deliveryDate: '2025-05-28' },
    { name: 'Anjali', mobile: '9876543210', dressType: 'Blouse', status: 'Completed', deliveryDate: '2025-05-18' },
    { name: 'Sneha', mobile: '9123456789', dressType: 'Chudidar', status: 'In Progress', deliveryDate: '2025-05-20' },
    { name: 'Meera', mobile: '7894561230', dressType: 'Saree', status: 'Completed', deliveryDate: '2025-05-21' },
    { name: 'Divya', mobile: '9988776655', dressType: 'Lehenga', status: 'New', deliveryDate: '2025-05-22' },
    { name: 'Roshni', mobile: '9871234567', dressType: 'Kurti', status: 'Alteration', deliveryDate: '2025-05-23' },
    { name: 'Kavya', mobile: '9090909090', dressType: 'Gown', status: 'Completed', deliveryDate: '2025-05-24' },
    { name: 'Pooja', mobile: '9012345678', dressType: 'Chudidar', status: 'In Progress', deliveryDate: '2025-05-25' },
    { name: 'Lakshmi', mobile: '9080706050', dressType: 'Blouse', status: 'New', deliveryDate: '2025-05-26' },
    { name: 'Radha', mobile: '9029384756', dressType: 'Saree', status: 'Alteration', deliveryDate: '2025-05-27' },
    { name: 'Geeta', mobile: '9988665544', dressType: 'Lehenga', status: 'Completed', deliveryDate: '2025-05-28' }
  ];

  constructor(private fb: FormBuilder , private  router:Router) {}

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      searchText: ['']
    });

    // Optional: reset to page 1 on search change
    this.searchForm.get('searchText')?.valueChanges.subscribe(() => {
      this.page = 1;
    });
  }

  filteredCustomers() {
    const text = this.searchForm.get('searchText')?.value?.toLowerCase() || '';
    return this.customers.filter(c =>
      c.name.toLowerCase().includes(text) || c.mobile.includes(text)
    );
  }

  totalPages() {
    return Math.ceil(this.filteredCustomers().length / this.pageSize);
  }

  totalPagesArray() {
    return Array(this.totalPages()).fill(0).map((_, i) => i + 1);
  }

 updateCustomer(customer: any): void {
  sessionStorage.setItem('editCustomer', JSON.stringify(customer)); // store customer data
  this.router.navigate(['/update']); // navigate to update page
}

  
}