import { Component } from '@angular/core';
import { FormGroup, FormsModule, FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-reactive-form-validation',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './reactive-form-validation.component.html',
  styleUrl: './reactive-form-validation.component.css'
})
export class ReactiveFormValidationComponent {
  title = 'template-form-app';
  email: string = "";
  password: string = "";
  

  loginForm: FormGroup;

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    })
  }
  
  submitted: boolean = false;

  onSubmit() {
    if (this.loginForm.valid){
      console.log("Form Submitted!", this.loginForm.value);
    }
    else{
      console.log("Form is invalid");
    }
  }
}
