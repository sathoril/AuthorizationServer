import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-master-header',
  templateUrl: './master-header.component.html',
  styleUrls: ['./master-header.component.css']
})
export class MasterHeaderComponent implements OnInit {
  nomeUsuario: string;

  constructor(private router: Router, private oauthService: OAuthService) { }

  ngOnInit() {
    debugger;
    let claims = this.oauthService.getIdentityClaims();
    
    if (!claims) return null;
    
    this.nomeUsuario = claims["name"];
    console.log(this.oauthService.getAccessToken())
  }

  sair(): void {
    this.oauthService.logOut();
    this.router.navigateByUrl('/login');
  }
}
