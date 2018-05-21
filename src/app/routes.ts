/**
 * Copyright 2017 Dell Inc. or its subsidiaries. All Rights Reserved.
 */
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BmaComponent } from './bma/bma.component';
import { TribeComponent } from './tribe/tribe.component';
import { ClarityModule } from 'clarity-angular/public_api';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

const featureRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'bma', component: BmaComponent },
  { path: 'tribe',      component: TribeComponent }
];

export const appRoutes: Routes = [...featureRoutes];
