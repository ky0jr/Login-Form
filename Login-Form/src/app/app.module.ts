import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Authentication/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { DepartmentService } from './department.service';
import { RegisterComponent } from './Authentication/register/register.component';
import { getAuthServiceConfigs } from './socialLoginConfig';
import {AuthenticationService} from './Authentication/auth.service';
import { PagesComponent } from './pages/pages.component';
import {AuthInterceptorService} from './Authentication/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SocialLoginModule
  ],
  providers: [DepartmentService, {provide: AuthServiceConfig, useFactory: getAuthServiceConfigs}, AuthenticationService, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
