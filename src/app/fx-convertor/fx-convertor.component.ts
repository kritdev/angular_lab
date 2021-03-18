import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-fx-convertor',
  templateUrl: './fx-convertor.component.html',
  styleUrls: ['./fx-convertor.component.css']
})
export class FxConvertorComponent implements OnInit {
  form: FormGroup;
  fxRate: any[];

  constructor(private fb: FormBuilder, private httpClient: HttpClient) { 
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
    this.httpClient
    .get(`https://api.exchangeratesapi.io/latest?symbols=USD,THB`)
    .subscribe(result => {
      this.fxRate = result as any[];
    });
  }
}
