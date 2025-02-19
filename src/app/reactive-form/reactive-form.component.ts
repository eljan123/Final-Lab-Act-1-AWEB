import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  title = 'template-form-app';
  username: string = "";
  name: string = "";
  email: string = "";
  contact: string = "";
  address: string ="";
  
  submitted: boolean = false;

  onSubmit() {
    this.submitted = true;
  }
}
