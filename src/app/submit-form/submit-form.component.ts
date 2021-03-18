import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.css']
})
export class SubmitFormComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.form = this.fb.group({ 
      name: ['', Validators.required], 
      email: ['', [Validators.required, Validators.email]],
      postalAddress: ['', Validators.required],
      comments: ''
    }); 
  }

  ngOnInit(): void {
  }

  submitForm() {
    
  }

  isRequired(fieldName) {
    const validator = this.form.get(fieldName).validator({} as AbstractControl);
    return validator && validator.required;
  }
}
