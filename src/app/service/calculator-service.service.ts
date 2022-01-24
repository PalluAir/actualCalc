import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculatorServiceService {

  constructor(private http:HttpClient) { }

  public  getTotalAmount(form:any) : Observable<any>{
    const url=`http://localhost:8081/calculator/calculate/from/${form.value.from}/to/${form.value.to}/amount/${form.value.amount}`;
    return this.http.get<any>(url);

  }
}
