import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DummyListComponent } from './dummy-list.component';

const routes: Routes = [
  {
    path: '',
    component: DummyListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DummyListRoutingModule {}
