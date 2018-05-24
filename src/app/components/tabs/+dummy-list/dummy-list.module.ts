import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DummyListRoutingModule } from './dummy-list-routing.module';
import { DummyListComponent } from './dummy-list.component';

@NgModule({
  imports: [
    CommonModule,
    DummyListRoutingModule
  ],
  declarations: [DummyListComponent]
})
export class DummyListModule { }
