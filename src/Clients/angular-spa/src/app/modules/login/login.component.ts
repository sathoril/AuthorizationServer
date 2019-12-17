import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OAuthService } from 'angular-oauth2-oidc';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: OAuthService) {
  }

  ngOnInit() {
  }

  entrar() {
    this.authService.loadDiscoveryDocument().then(() => {
      this.authService.initCodeFlow();
    });
  }

  onFormKeydown($event) {
    // Se o usuário apertar enter
    if ($event.keyCode == 13) {
      this.entrar();
    }
  }
}