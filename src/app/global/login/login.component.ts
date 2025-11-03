import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
loginForm: FormGroup;
  message: string = '';
  isSuccess: boolean = false;
  isSubmitted: boolean | undefined;

  constructor(private fb: FormBuilder,private  router: Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

   onSubmit() {
    this.isSubmitted = true;

    if (this.loginForm.invalid) return;

    const { username, password } = this.loginForm.value;

    // ✅ Static credentials check
    if (username === 'admin' && password === '12345') {
      this.isSuccess = true;
      this.message = 'Login successful! 🎉';

      // Small delay to show success message before redirecting
      setTimeout(() => {
      this.router.navigate(['/dashboard']);
      }, 500);
    } else {
      this.isSuccess = false;
      this.message = 'Invalid username or password';
    }
  }
  

  get f() {
    return this.loginForm.controls;
  }
}
