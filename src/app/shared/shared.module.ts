// core
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// libraries
import { MaterialModule } from './../lib';

@NgModule({ 
  imports: [
    CommonModule,
    MaterialModule,
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  exports: [
    MaterialModule,
  ]
})
export class SharedModule { }
