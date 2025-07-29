import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validator,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private formbuilder: FormBuilder,
    private authService: AuthService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createLoginForm();
  }
  createLoginForm() {
    this.loginForm = this.formbuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      let loginModel = Object.assign({}, this.loginForm.value);
      this.authService.login(loginModel).subscribe({
        next: (response) => {
        this.toastrService.success(response.message);
        console.log(response);
        localStorage.setItem('token', response.data.token);
      },error: (errorResponse) => {
        const errorMessage = errorResponse.error?.message || errorResponse.error; // hem .message hem direkt text olabilir
        this.toastrService.error(errorMessage);
        console.log(errorMessage)
      }
    });
    }
  }
}
