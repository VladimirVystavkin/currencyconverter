import { Component } from '@angular/core';
import { CurrencyDetailsService } from 'src/app/services/currency-details.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  currencies : any  
  euroCourse : any
  dollarCourse : any
  constructor( private service: CurrencyDetailsService){
      
  }
  ngOnInit(): void {
    this.service.getCurrencies().subscribe(response =>{
    this.currencies = response
    if(response instanceof Array){
      response.forEach((element)=>{
        if(element['cc'] === "EUR"){this.euroCourse = element}
        if(element['cc'] === "USD"){this.dollarCourse = element}
        })
    }
  })
  }
}
