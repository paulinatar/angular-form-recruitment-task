import { ValidatorFn } from '@angular/forms';

export interface FieldConfig {
  disabled?: boolean,
  label?: string,
  name: string,
  options?: [],
  placeholder?: string,
  type: string,
  validation?: ValidatorFn[],
  required?: boolean,
  value?: any
}