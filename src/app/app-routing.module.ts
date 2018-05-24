import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

const tabs = require('./tabs.json');

tabs.sort((a, b) => a.order - b.order);

const routes: Routes = [ 
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: tabs[0] ? tabs[0].id : '',
        pathMatch: 'full',
      },
      {
        path: tabs[0] ? tabs[0].id : '',
        loadChildren: "./components/tabs/+dummy-list/dummy-list.module#DummyListModule",
        data: tabs[0],
      },
      {
        path: tabs[1] ? tabs[1].id : '',
        loadChildren: "./components/tabs/+dummy-table/dummy-table.module#DummyTableModule",
        data: tabs[1]
      },
      {
        path: tabs[2] ? tabs[2].id : '',
        loadChildren: "./components/tabs/+dummy-chart/dummy-chart.module#DummyChartModule",
        data: tabs[2],
      }
    ]
  },
  { path: '**', redirectTo: tabs[0].id}
  
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() {}
}
