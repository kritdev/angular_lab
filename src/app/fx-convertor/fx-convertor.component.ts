import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-fx-convertor',
  templateUrl: './fx-convertor.component.html',
  styleUrls: ['./fx-convertor.component.css']
})
export class FxConvertorComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.form = this.fb.group({ 
      fromCurrency: ['', Validators.required], 
      fromAmount: ['', Validators.required], 
      toCurrency: ['', Validators.required], 
      toAmount: '', 
    }); 
  }

  ngOnInit(): void {
  }

  convert() {

  }
}
