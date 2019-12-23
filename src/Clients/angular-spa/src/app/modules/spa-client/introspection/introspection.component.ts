import { Component, OnInit } from '@angular/core';
import { SpaClientService } from '../spa-client.service';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-introspection',
  templateUrl: './introspection.component.html',
  styleUrls: ['./introspection.component.scss']
})
export class InstrospectionComponent implements OnInit {

  constructor(private spaClientService: SpaClientService, oAuthService: OAuthService) { }

  ngOnInit() {
    // this.oAuthService.
  }
}
