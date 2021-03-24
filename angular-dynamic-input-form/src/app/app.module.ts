import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form/dynamic-form.component';
import { DynamicFormModule } from './dynamic-form/dynamic-form/dynamic-form.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    DynamicFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
