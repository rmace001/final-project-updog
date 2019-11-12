import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MatButtonModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BloopComponent } from './bloop/bloop.component';
import { FormsModule } from '@angular/forms';
import { RecentRunsComponent } from './recent-runs/recent-runs.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import { HeatmapComponent } from './heatmap/heatmap.component';
import  { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';

import * as more from 'highcharts/highcharts-more.src';
import * as exporting from 'highcharts/modules/exporting.src';
import * as hizzlemap from 'highcharts/modules/heatmap.src';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BloopComponent,
    RecentRunsComponent,
    HeatmapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatRadioModule,
    MatSelectModule,
    MatCardModule,
    ChartModule
    
  ],
  providers: [
    { provide: HIGHCHARTS_MODULES, useFactory: () => [ more, exporting, hizzlemap ] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
