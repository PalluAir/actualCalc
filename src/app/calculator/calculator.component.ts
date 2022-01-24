import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, FormControl, FormControlName } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CalculatorServiceService } from '../service/calculator-service.service';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {


  totalAmount: any;
  // from: any;
  // to: any;
  // amount: any;
  currencyForm: FormGroup;
  router: any;
  selected: any;


  constructor(private http:HttpClient, formBuilder: FormBuilder, router: Router, public calculatorService: CalculatorServiceService) { 
    this.currencyForm = formBuilder.group({
    amountVal: new FormControl,
    fromVal: new FormControl,
    toVal: new FormControl,
    conversionCal: new FormControl
  })};

  ngOnInit(): void {
    this.currencyForm = new FormGroup({
      'amountVal' : new FormControl(),
      'fromVal' : new FormControl(),
      'toVal' : new FormControl() 
    }

    )
  }
  // selectedChanged() {
  //   console.log(this.selected);
  // }

  calculate(form: any){
    console.log(form.value);
    this.calculatorService.getTotalAmount(form).subscribe(response =>{
      this.totalAmount=response.totalCalculatedAmount;
      console.log(response);
    });
    // const url=`http://localhost:8081/calculator/calculate/from/${form.value.from}/to/${form.value.to}/amount/${form.value.amount}`;
    // this.http.get(url)
    // .subscribe(response => {
    //   console.log(response);
    // this.totalAmount = response;
    // console.log(this.totalAmount);
    // });
  }
  

  transaction(){
              this.router.navigateByUrl('http://localhost:8890/transaction');
  }
}
