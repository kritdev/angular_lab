import { HttpClient } from '@angular/common/http';
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
    let fromCurrency = this.form.value.fromCurrency;
    let toCurrency = this.form.value.toCurrency;
    let fxRate = 0.0;

    this.httpClient
    .get(`https://api.exchangeratesapi.io/latest?symbols=${fromCurrency},${toCurrency}`)
    .pipe(
      catchError(error => {
        return throwError(
          'Error in getting exchange rate.');
      })
    )
    .subscribe(
      result => {
        this.fxData = result as any[];
        fxRate = this.fxData['rates'][toCurrency] / this.fxData['rates'][fromCurrency];
        this.form.patchValue({toAmount: this.form.value.fromAmount * fxRate});
      }, 
      err => {alert(err)}
    );
  }
}
