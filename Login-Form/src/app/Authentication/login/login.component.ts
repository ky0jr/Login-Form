import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { DepartmentService } from '../../department.service';
import { AuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import {AuthenticationService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: string = null;

  loginForm: FormGroup;
  user: SocialUser;

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  constructor(private fb: FormBuilder, private authService: AuthService, private auth: AuthenticationService, private router: Router){

  }
  onSubmit(loginForm: FormGroup) {
    if(!loginForm.valid)
      return;
    const email = this.email.value;
    const password = this.password.value;
    this.auth.Login(email, password).subscribe(
      resData => {
        console.log(resData);
        this.router.navigate(['/page']);
      },
      errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
      }
    );
    loginForm.reset();
  }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      userData => {
        this.user = userData;
        console.log(userData.idToken);
      }
    );

  }
  //
  signOut(): void {
    this.authService.signOut();
    this.user = null;
  }
  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  //   departments = [];
  //   userNameError: string;
  //   passError: string;
  //   _user: string;
  //   _password: string;
  //
  // constructor(private fb: FormBuilder, private authService: AuthService) { }
  // //private ds: DepartmentService,
  // ngOnInit() {
  //   this.loginForm = this.fb.group({
  //     userName: [''],
  //     password: [''],
  //     department: ['default']
  //   });
  //   // this.ds.getJson().subscribe(data => this.departments = data);
  //   this.authService.authState.subscribe((user) => this.user = user);
  // }


}
  //
  // checkUserName() {
  //
  //   this._user = this.userName.value;
  //   if (this.userName.touched) {
  //     if (this._user.length === 0) {
  //       this.userNameError = 'Username is required';
  //       return false;
  //     } else if (this._user.length < 6 || this._user.length > 20) {
  //       this.userNameError = 'Username must between 6 and 20 character';
  //       return false;
  //     }
  //   }
  //   return true;
  // }
  //
  // checkPassword() {
  //
  //   this._password = this.password.value;
  //   if (this.password.touched) {
  //     if (this._password.length === 0) {
  //       this.passError = 'Password is required';
  //       return false;
  //     } else if (this._password.length < 8 || this._password.length > 16) {
  //       this.passError = 'Password must between 8 and 16 character';
  //       return false;
  //     }
  //   }
  //   return true;
  // }
  //
  // checkSelection() {
  //   if (this.selection.value === 'default' && this.selection.touched) {
  //     return false;
  //   }
  //   return true;
  // }
  //
  // get userName() {
  //   return this.loginForm.get('userName');
  // }

  //
  // get password() {
  //   return this.loginForm.get('password');
  // }
  // get selection() {
  //   return this.loginForm.get('department');
  // }

