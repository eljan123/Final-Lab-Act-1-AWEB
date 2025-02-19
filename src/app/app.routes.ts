import { Routes } from '@angular/router';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormValidationComponent } from './reactive-form-validation/reactive-form-validation.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'template-driven', component: TemplateDrivenComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'reactive-form-validation', component: ReactiveFormValidationComponent },
];
