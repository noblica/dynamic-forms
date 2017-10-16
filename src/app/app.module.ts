import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form/dynamic-form-question.component';

@NgModule({
  declarations: [
    AppComponent,
      DynamicFormComponent,
      DynamicFormQuestionComponent
  ],
  imports: [
    BrowserModule,
      HttpClientModule,
      ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
