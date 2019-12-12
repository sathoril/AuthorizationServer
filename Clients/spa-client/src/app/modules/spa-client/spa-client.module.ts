import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MasterHeaderComponent } from 'src/app/shared/components/master-header/master-header.component';
import { SpaClientComponent } from './spa-client.component';

@NgModule({
  declarations: [
    MasterHeaderComponent,
    SpaClientComponent
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
