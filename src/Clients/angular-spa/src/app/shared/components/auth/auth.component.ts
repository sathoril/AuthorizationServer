import { Component, OnInit, DoCheck, AfterContentInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements AfterContentInit {
  accessToken: string;

  constructor(private router: Router, private oauthService: OAuthService) {

  }

  ngAfterContentInit() {
    // setTimeout(() => {
    this.accessToken = this.oauthService.getAccessToken();
      if (this.accessToken)
        this.router.navigateByUrl('/spa-client');
      else
        this.router.navigateByUrl('');
    // }, 6000);

  }

}
