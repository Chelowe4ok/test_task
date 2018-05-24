import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DummyTableRoutingModule } from './dummy-table-routing.module';
import { DummyTableComponent } from './dummy-table.component';

@NgModule({
  imports: [
    CommonModule,
    DummyTableRoutingModule
  ],
  declarations: [DummyTableComponent]
})
export class DummyTableModule { }
