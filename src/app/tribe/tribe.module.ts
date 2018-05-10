import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TribeComponent } from './tribe.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TribeComponent],
  exports: [
	  TribeComponent
  ],
})
export class TribeModule { }
