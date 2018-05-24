import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DummyChartComponent } from './dummy-chart.component';

const routes: Routes = [
  {
    path: '',
    component: DummyChartComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DummyChartRoutingModule { }
