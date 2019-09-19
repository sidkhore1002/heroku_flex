import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Table1Component } from './table1/table1.component';
import { Table2Component } from './table2/table2.component';
import { CompliantChartComponent } from './compliant-chart/compliant-chart.component';

const routes: Routes = [
  {path : '', redirectTo: 'compliant-chart', pathMatch : 'full'},
  {path : 'table1', component : Table1Component},
  {path : 'table2', component : Table2Component},
  {path : 'compliant-chart', component : CompliantChartComponent},


  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
