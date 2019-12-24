import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { IntrospectionService } from './introspection.service';

@Component({
  selector: 'app-introspection',
  templateUrl: './introspection.component.html',
  styleUrls: ['./introspection.component.scss']
})
export class InstrospectionComponent implements OnInit {

  constructor(private introspectionService: IntrospectionService, private oAuthService: OAuthService) { }

  ngOnInit() {
    let accessToken = this.oAuthService.getAccessToken();

    this.introspectionService.validarToken(accessToken).subscribe((response: any) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });;

  }
}
