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
  {
    id: 1,
    name: 'Priya Patil',
    mobile: '9876543210',
    dressType: 'Lehenga',
    status: 'Pending With Measurement',
    deliveryDate: '2025-11-10'
  },
  {
    id: 2,
    name: 'Sneha Kulkarni',
    mobile: '9988776655',
    dressType: 'Saree Blouse',
    status: 'Pending With Measurement',
    deliveryDate: '2025-11-03'
  },
  {
    id: 3,
    name: 'Anjali Desai',
    mobile: '9123456789',
    dressType: 'Kurti',
    status: 'Pending With Measurement',
    deliveryDate: '2025-11-15'
  }
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
assignEmployee(customer: any) {
  // Save customer details to sessionStorage
  sessionStorage.setItem('selectedCustomer', JSON.stringify(customer));

  // Navigate to employee page
  this.router.navigate(['/employee']);
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

outsourceCustomer(customer: any) {
  // Store customer data in sessionStorage
  sessionStorage.setItem('outsourceCustomer', JSON.stringify(customer));

  // Navigate to outsource form
  this.router.navigate(['/inventoryoutdoor']);
}

  
}