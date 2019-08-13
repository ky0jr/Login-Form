import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../Authentication/auth.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

  onLogout() {
    this.authService.Logout();
  }

}
