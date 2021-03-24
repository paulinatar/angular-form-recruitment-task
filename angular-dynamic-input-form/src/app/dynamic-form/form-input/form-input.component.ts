import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'form-input',
   styleUrls: ['form-input.component.scss'],
  template: `
    <div 
      class="dynamic-field form-input" 
      [formGroup]="group">
      <label>{{ config.label }}</label>
      <input
        type="text"
        [attr.placeholder]="config.placeholder"
        [attr.required]= "config.required"
        [formControlName]="config.name" />
    </div>
  `,
})
export class FormInputComponent {
  config: any;
  group: FormGroup;
}