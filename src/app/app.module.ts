/**
 * Copyright 2017 Dell Inc. or its subsidiaries. All Rights Reserved.
 */
import { ClarityModule } from 'clarity-angular/public_api';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BmaModule } from './bma/bma.module';
import { TribeModule } from './tribe/tribe.module';
import { BmaComponent } from './bma/bma.component';
import { TribeComponent } from './tribe/tribe.component';
import { appRoutes } from './routes';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(appRoutes),
    BmaModule,
    TribeModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
