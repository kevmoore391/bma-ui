/**
 * Copyright 2017 Dell Inc. or its subsidiaries. All Rights Reserved.
 */
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
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

const appRoutes2: Routes = [
  { path: '', component: BmaComponent },
  { path: 'bma', component: BmaComponent },
  { path: 'tribe',      component: TribeComponent }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(appRoutes),
    RouterModule.forRoot(appRoutes2),
    CoreModule,
    SharedModule,
    BmaModule,
    TribeModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
