import { Component, Input, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import {FieldConfig} from '../../models/field-config.interface'

@Component({
  selector: 'dynamic-form',
  styleUrls: ['./dynamic-form.component.scss'],
 template:`
 <form
 class = "dynamic-field"
 [formGroup]="form"  (submit)="handleSubmit($event)">
 <ng-container
 *ngFor = "let field of config;"
 dynamicField
 [config]= "field"
 [group]="form">
 </ng-container>
 </form>`
 
  
   
})
export class DynamicFormComponent implements OnChanges, OnInit {
  @Input()
  config:FieldConfig[]= [];
  
  @Output() 
  submit: EventEmitter<any> = new EventEmitter<any>();
  form: FormGroup;

  get controls() { return this.config.filter(({type}) => type !== 'button'); }
  get changes() { return this.form.valueChanges; }
  get valid() { return this.form.valid; }
  get value() { return this.form.value; }
  

  constructor( private fb: FormBuilder ) {
   }

  ngOnInit(): void {
    this.form = this.createGroup();

}
ngOnChanges(){
  if(this.form){
    const controls = Object.keys(this.form.contains);
    const configControls = this.controls.map((item) => item.name);

    controls.filter((control) => !configControls.includes(control))
    .forEach((control)=> this.form.removeControl(control));

    configControls
    .filter((control) => !controls.includes(control))
    .forEach((name) => {
      const config = this.config.find((control) => control.name === name);
      console.log(config)
      //  this.form.addControl(name, this.createControl(config));
    });
  }

}

createGroup(){
  const group = this.fb.group({});
  this.controls.forEach(control => group.addControl(control.name, this.createControl(control)));
  return group;
}
createControl (config: FieldConfig){
  const {disabled, validation, value} = config;
  return this.fb.control({disabled, value}, validation);

}
handleSubmit(event: Event){
  event.preventDefault();
  event.stopImmediatePropagation();
  this.submit.emit(this.value);
  console.log(this.value);
  this.form.reset();
}
setDisabled(name: string, disable: boolean){
if(this.form.controls[name]){
const method = disable ? 'disable' : 'enable';
this.form.controls[name][method]();
return;


}
this.config = this.config.map((item) =>{
  if(item.name === name){
item.disabled = disable;
  }
  return item;
})
}
setValue(name: string, value: any){
this.form.controls[name].setValue(value, {emitEvent: true});
}

}
