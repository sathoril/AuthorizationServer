import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { SpaClientComponent } from './modules/spa-client/spa-client.component';
import { AutorizacaoProvider } from './shared/services/autorizacao-provider';
import { WeatherForecastComponent } from './modules/spa-client/weather-forecast/weather-forecast.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'spa-client',
    component: SpaClientComponent,
    canActivateChild: [AutorizacaoProvider],
    children: [
      {
        path:'weather-forecast',
        component: WeatherForecastComponent,
        canActivate: [AutorizacaoProvider]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
