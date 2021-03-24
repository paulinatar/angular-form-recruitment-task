import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../../models/field.interface'

@Component({
  selector: 'form-checkbox',
  styleUrls: ['form-checkbox.component.scss'],
  template: `
    <div 
      class="dynamic-field form-checkbox" [formGroup]="group">
      <label>{{ config.label }}</label>
        <div *ngFor="let option of config.options" >
          <input type="checkbox"  id="option.value" [value]=" option.value"
          [formControlName]= "config.name" >
          <label>{{option.label}}</label>
        </div>
    </div>
  `,
})
export class FormCheckboxComponent implements Field {
  config: any;
  group: FormGroup;
}