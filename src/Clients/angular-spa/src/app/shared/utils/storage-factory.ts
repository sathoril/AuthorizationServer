import { OAuthModule, ValidationHandler, JwksValidationHandler, OAuthStorage } from 'angular-oauth2-oidc';

export function StorageFactory(): OAuthStorage {
  return localStorage;
}