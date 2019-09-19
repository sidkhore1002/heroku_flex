import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Table1Component } from './table1/table1.component';
import {HttpClientModule} from '@angular/common/http';

import { FlexLayoutModule } from '@angular/flex-layout';
import { Table2Component } from './table2/table2.component';
import { CompliantChartComponent } from './compliant-chart/compliant-chart.component';
import {RoundProgressModule} from 'angular-svg-round-progressbar';

@NgModule({
  declarations: [
    AppComponent,
    Table1Component,
    Table2Component,
    CompliantChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    RoundProgressModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
