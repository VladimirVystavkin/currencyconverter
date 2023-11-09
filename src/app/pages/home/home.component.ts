import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ReactiveFormsModule,FormControl, FormGroup, Validators } from '@angular/forms';

import { CurrencyDetailsService } from 'src/app/services/currency-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , OnChanges{
  control1 = new FormControl
  control2 = new FormControl

  firstCurrencyInput : any
  secondCurrencyInput : any
 
  form = new FormGroup({
    firstSelectedCurrency : this.control1,
    secondSelectedCurrency : this.control2,
  })

  
  currencies : any
  constructor( private service: CurrencyDetailsService){
    
    
  }
  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
    this.service.getCurrencies().subscribe(response =>{
    this.currencies = response
    if(response instanceof Array){
      this.form.get('firstSelectedCurrency')?.setValue(response[0])
      this.form.get('secondSelectedCurrency')?.setValue(response[1])
    }
    
  })
  }

  convertCurrencyFirstInput(event:any) {
    this.secondCurrencyInput = this.convertValue((event?.target)?.value,  this.control1 ,this.control2 ).toString()

  }
  convertCurrencySecondInput(event:any) {
    
    // console.log(this.form.get('firstSelectedCurrency')?.value['rate'])
   this.firstCurrencyInput = this.convertValue((event?.target)?.value,  this.control2 ,this.control1 ).toString()
  }
  convertValue(valueOfSourceControl : string , sourceControl: FormControl , sourceControl2: FormControl  ) : number{
    let rateOfFirstCurrency = sourceControl.value['rate']
    let rateOfSecondCurrency = sourceControl2.value['rate']
    return this.stringCurrencyConverter(rateOfFirstCurrency, valueOfSourceControl,rateOfSecondCurrency)
  }
  
  stringCurrencyConverter(rateOfFirstCurrency: string, firstValue: string , rateOfSecondCurrency: string) : number{
    
    return this.currencyConverter(Number(rateOfFirstCurrency),Number(firstValue),Number(rateOfSecondCurrency)) 
  }

  currencyConverter(rateOfFirstValue : number , firstValue: number , rateOfSecondValue: number) : number{
    return (rateOfFirstValue * firstValue) / rateOfSecondValue;
  }

}
