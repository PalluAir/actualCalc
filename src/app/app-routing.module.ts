import { NgModule } from '@angular/core';
import { CalculatorComponent } from './calculator/calculator.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',component: CalculatorComponent},
  { path: 'home',component: CalculatorComponent},
  { path: '**', component: CalculatorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
