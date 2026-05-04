import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.html', // ← sin "component" en el nombre
  styleUrl: './login.css', // ← sin "component" en el nombre
})
export class Login {
  // ← Login, no LoginComponent
  loginForm: FormGroup;
  isLoading = signal(false);
  errorMessage = signal('');
  loginSuccess = signal(false);

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) return;
    this.isLoading.set(true);
    this.errorMessage.set('');
    setTimeout(() => {
      this.isLoading.set(false);
      this.loginSuccess.set(true);
    }, 1500);
  }
}
