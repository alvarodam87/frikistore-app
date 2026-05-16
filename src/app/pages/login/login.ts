import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; //
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink], // <-- Añadido aquí
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
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
