import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyDetailsService {
  
  constructor(private http: HttpClient) {  
   }

  public getCurrencies(): Observable<any>{
    return this.http.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
  }
}
