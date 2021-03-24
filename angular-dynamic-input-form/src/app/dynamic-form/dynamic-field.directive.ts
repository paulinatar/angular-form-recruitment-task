import { Directive, Input, OnChanges, OnInit, ComponentFactoryResolver, ComponentRef, Type, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../models/field-config.interface';
import{Field} from '../models/field.interface';
import {FormButtonComponent} from '../dynamic-form/form-button/form-button.component';
import {FormInputComponent} from '../dynamic-form/form-input/form-input.component';
import {FormSelectComponent} from '../dynamic-form/form-select/form-select.component'
import { FormRadioComponent } from './form-radio/form-radio-component';
import { FormCheckboxComponent } from './form-checkbox/form-checkbox';



const components: {[type: string]: Type<Field>} = {
    button: FormButtonComponent,
    input: FormInputComponent,
    select: FormSelectComponent,
    radio: FormRadioComponent,
    checkbox: FormCheckboxComponent
  };

@Directive({
  selector: '[dynamicField]',
})
export class DynamicFieldDirective implements Field, OnChanges, OnInit {
  @Input() config: FieldConfig;
  @Input() group: FormGroup;
  component: ComponentRef<Field>;
  constructor(
      private resolver: ComponentFactoryResolver,
      private container: ViewContainerRef
  ){
     
  }
ngOnChanges(){
    if (this.component){
          this.component.instance.config = this.config;
          this.component.instance.group = this.group
      }
}
  ngOnInit(){
      if(!components[this.config.type]){
          const supportedTypes = Object.keys(components).join(', ');
          throw new Error(
              `Ten typ inputa jest niewspierany`
          );
      }
      const component = this.resolver.resolveComponentFactory<Field>(components[this.config.type]);
      this.component = this.container.createComponent(component);
      this.component.instance.config = this.config;
      this.component.instance.group = this.group

  }
}