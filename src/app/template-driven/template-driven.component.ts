import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-template-driven',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.css'
})
export class TemplateDrivenComponent {
  title = 'template-form-app';
  username: string = "";
  name: string = "";
  email: string = "";
  contact: string = "";
  
  submitted: boolean = false;

  onSubmit() {
    this.submitted = true;
  }

}
