import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component'
import { BloopComponent} from './bloop/bloop.component'


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Bloop', component: BloopComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
