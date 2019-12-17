import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './modules/login/login.module';
import { ConfigService } from './shared/base/config.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SpaClientComponent } from './modules/spa-client/spa-client.component';
import { SpaClientModule } from './modules/spa-client/spa-client.module';
import { OAuthModule, ValidationHandler, JwksValidationHandler, OAuthStorage } from 'angular-oauth2-oidc';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from './shared/services/http-interceptor/http-interceptor.service';
import { AutorizacaoProvider } from './shared/services/autorizacao-provider';
import { AuthComponent } from './shared/components/auth/auth.component';
import { StorageFactory } from './shared/utils/storage-factory';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    SpaClientModule,
    OAuthModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    },
    {
      provide: ValidationHandler,
      useClass: JwksValidationHandler
    },
    {
      provide: OAuthStorage, useFactory: StorageFactory
    },
    AutorizacaoProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
