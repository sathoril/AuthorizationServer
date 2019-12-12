import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer } from '@angular/platform-browser';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pageForm: FormGroup;
  authorizeUrl: string;
  sanitizedAuthorizeUrl: string;
//   gruposUsuario: GrupoUsuario[];


  constructor(private fb: FormBuilder, private router: Router, private modalService: NgbModal, private authService: OAuthService) {
  }

  ngOnInit() {
    // this.authorizeUrl = "http://localhost:5000/connect/authorize?audience=spa-client&scope=openid profile&redirect_uri=http://localhost:4200&response_type=code&client_id=spa-client";
  }

  entrar(): void {
    this.authService.initCodeFlow();
    // this.authService.login();
    // this.authorizeUrl, "", "width=500,height=500");
  }

  onFormKeydown($event){
    // Se o usuário apertar enter
    if($event.keyCode == 13){
      this.entrar();
    }
  }
}