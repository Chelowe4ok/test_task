import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DummyChartRoutingModule } from './dummy-chart-routing.module';
import { DummyChartComponent } from './dummy-chart.component';

@NgModule({
  imports: [
    CommonModule,
    DummyChartRoutingModule
  ],
  declarations: [DummyChartComponent]
})
export class DummyChartModule { }
