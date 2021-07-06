import { HttpClient } from '@angular/common/http';
import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-fx-convertor',
  templateUrl: './fx-convertor.component.html',
  styleUrls: ['./fx-convertor.component.css']
})
export class FxConvertorComponent implements OnInit {
  form: FormGroup;
  fxData: any[];

  constructor(
    private fb: FormBuilder, 
    private httpClient: HttpClient,
    private decimalPipe: DecimalPipe) { 
    this.form = this.fb.group({ 
      fromCurrency: ['', Validators.required], 
      fromAmount: ['', Validators.required], 
      toCurrency: ['', Validators.required], 
      apiKey: ['', Validators.required],
      toAmount: '', 
    }); 
  }

  ngOnInit(): void {
  }

  convert() {
    let fromCurrency = this.form.value.fromCurrency;
    let toCurrency = this.form.value.toCurrency;
    let apiKey = this.form.value.apiKey;
    let fxRate = 0.0;

    let url = `http://api.exchangeratesapi.io/v1/latest?access_key=${apiKey}&symbols=${fromCurrency},${toCurrency}`
    console.log(url);

    this.httpClient
    .get(url)
    .pipe(
      catchError(error => {
        return throwError(
          'Error in getting exchange rate.');
      })
    )
    .subscribe(
      result => {
        this.fxData = result as any;
        fxRate = this.fxData['rates'][toCurrency] / this.fxData['rates'][fromCurrency];
        this.form.patchValue({
          toAmount: this.decimalPipe.transform((this.form.value.fromAmount * fxRate).toFixed(2))
        });
      }, 
      err => {alert(err)}
    );
  }
}
