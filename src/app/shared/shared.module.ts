/**
 * Copyright 2017 Dell Inc. or its subsidiaries. All Rights Reserved.
 */
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from 'clarity-angular';

/**
 * Export modules shared across features, just import
 * SharedModule in your FeatureModule
 */
@NgModule({
  exports: [
    CommonModule,
    ClarityModule,
    FormsModule,
    HttpClientModule
  ]
})
export class SharedModule { }
