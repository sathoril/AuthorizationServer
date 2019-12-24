import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MasterHeaderComponent } from 'src/app/shared/components/master-header/master-header.component';
import { SpaClientComponent } from './spa-client.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { InstrospectionComponent } from './introspection/introspection.component';
import { MasterLeftSidebarComponent } from 'src/app/shared/components/master-left-sidebar/master-left-sidebar.component';

@NgModule({
  declarations: [
    MasterHeaderComponent,
    MasterLeftSidebarComponent,
    SpaClientComponent,
    WeatherForecastComponent,
    InstrospectionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SpaClientModule { }
