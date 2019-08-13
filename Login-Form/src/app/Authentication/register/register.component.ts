import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { DepartmentService } from '../../department.service';
import {AuthenticationService} from '../auth.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  error: string = null;
  registrationForm: FormGroup;


  constructor(private fb: FormBuilder, private auth: AuthenticationService, private  router: Router) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

  }
  onSubmit(registrationForm: FormGroup) {
    if(!registrationForm.valid)
      return;
    const email = this.email.value;
    const password = this.password.value;
    this.auth.SignUp(email, password).subscribe(
      resData => {
        console.log(resData);
        this.router.navigate(['/page']);
      },
      errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
      }
    );
    registrationForm.reset();
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get password() {
    return this.registrationForm.get('password');
  }
  //this.ds.getJson().subscribe(data => this.departments = data);
  //private ds: DepartmentService
  // departments = [];
  // userNameError: string;
  // passError: string;
  // confirmPassError: string;
  // emailError: string;
  // checkUserName() {
  //
  //   const _user = this.userName.value;
  //   if (this.userName.touched) {
  //     if (_user.length == 0) {
  //       this.userNameError = 'Username is required';
  //       return false;
  //     } else if (_user.length < 6 || _user.length > 20) {
  //       this.userNameError = 'Username must between 6 and 20 character';
  //       return false;
  //     }
  //   }
  //   return true;
  // }
  //
  // checkPassword() {
  //
  //   const _password = this.password.value;
  //   if (this.password.touched) {
  //     if (_password.length == 0) {
  //       this.passError = 'Password is required';
  //       return false;
  //     } else if (_password.length < 8 || _password.length > 16) {
  //       this.passError = 'Password must between 8 and 16 character';
  //       return false;
  //     }
  //   }
  //   return true;
  // }
  //
  // checkConfirmPassword() {
  //   const confirmPassword = this.registrationForm.get('confirm').value;
  //   if (this.registrationForm.get('confirm').touched) {
  //     if (confirmPassword != this.password.value && this.password.value.length != 0) {
  //       this.confirmPassError = 'Password does not match';
  //       return false;
  //     }
  //
  //   }
  //   return true;
  // }
  //
  // checkEmail() {
  //
  //   const _email = this.email.value;
  //   if (this.email.touched) {
  //     const patt = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  //     if (_email.length == 0) {
  //       this.emailError = 'Email is required';
  //       return false;
  //     } else if (!patt.test(_email)) {
  //       this.emailError = 'Email is invalid';
  //       return false;
  //     }
  //   }
  //
  //   return true;
  // }
  //
  // checkSelection() {
  //   if (this.selection.value == 'default' && this.selection.touched) {
  //     return false;
  //   }
  //   return true;
  // }

  // get userName() {
  //   return this.registrationForm.get('userName');
  // }


  // get selection() {
  //   return this.registrationForm.get('department');
  // }



}
