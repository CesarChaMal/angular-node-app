import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {
  isLoading = false;
  erroMessage: string;

  constructor(public authService: AuthService) {}

  onSignup(form: NgForm) {
    console.log(form.value);
    if (form.invalid) {
      return;
    }
    this.authService.createUser(form.value.email, form.value.password);
    if (!this.authService.isLoggedIn()) {
      this['erroMessage'] = 'Error, usuario ya existe';
    } else {
      this['erroMessage'] = '';
    }
  }
}
