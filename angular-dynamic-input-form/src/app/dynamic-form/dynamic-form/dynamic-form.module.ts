import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form.component';
import { FormButtonComponent } from '../form-button/form-button.component';
import { FormInputComponent } from '../form-input/form-input.component';
import { FormSelectComponent } from '../form-select/form-select.component';
import { DynamicFieldDirective } from '../dynamic-field.directive';
import {FormRadioComponent} from '../form-radio/form-radio-component'
import { FormCheckboxComponent } from '../form-checkbox/form-checkbox';



@NgModule({

  imports: [
    CommonModule, ReactiveFormsModule
  ],
  declarations: [DynamicFormComponent,
    DynamicFieldDirective,
    FormButtonComponent,
    FormInputComponent,
    FormSelectComponent,
  FormRadioComponent,
FormCheckboxComponent],
  exports: [DynamicFormComponent],
  entryComponents: [
    FormButtonComponent,
    FormInputComponent,
    FormSelectComponent,
    FormRadioComponent,
    FormCheckboxComponent
  ],
})
export class DynamicFormModule { }
