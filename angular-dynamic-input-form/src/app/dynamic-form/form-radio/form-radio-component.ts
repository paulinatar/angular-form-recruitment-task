import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {Field} from '../../models/field.interface'

@Component({
  selector: 'form-radio',
   styleUrls: ['form-radio.component.scss'],
  template: `
    <div 
      class="dynamic-field form-radio" [formGroup]="group">
      <label>{{ config.label }}</label>
         <div *ngFor="let option of config.options" >
          <input type="radio"  id="option.value" [value]="option.value"
          [formControlName]= "config.name" [name]="config.name">
          <label>{{option.label}}</label>
         </div>   
    </div>
  `,
})
export class FormRadioComponent implements Field {
  config: any;
  group: FormGroup;
}


