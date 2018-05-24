import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DummyTableComponent } from './dummy-table.component';

const routes: Routes = [
  {
    path: '',
    component: DummyTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DummyTableRoutingModule { }
