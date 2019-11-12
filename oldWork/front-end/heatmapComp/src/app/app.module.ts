import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HIGHCHARTS_MODULES, ChartModule } from 'angular-highcharts';
import  { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import * as more from 'highcharts/highcharts-more.src';
import * as exporting from 'highcharts/modules/exporting.src';
import * as hizzlemap from 'highcharts/modules/heatmap.src';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule
  ],
  providers: [
    { provide: HIGHCHARTS_MODULES, useFactory: () => [ more, exporting, hizzlemap ] } // add as factory to your providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
