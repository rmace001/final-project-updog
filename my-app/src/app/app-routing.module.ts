import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { BloopComponent} from './bloop/bloop.component';
import { RecentRunsComponent } from './recent-runs/recent-runs.component';
import { HeatmapComponent } from './heatmap/heatmap.component';

import { DisplayChartComponent } from './display-chart/display-chart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



const routes: Routes = [
  { path: '', component : LoginComponent},
  // { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent },
  { path: 'bloop', component: BloopComponent},
  { path: 'recent', component: RecentRunsComponent},
  { path: 'heatmap', component: HeatmapComponent},
  { path: 'display-chart',component: DisplayChartComponent},
  { path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
