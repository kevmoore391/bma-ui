/**
 * Copyright 2017 Dell Inc. or its subsidiaries. All Rights Reserved.
 */
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { ClarityModule } from 'clarity-angular/public_api';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BmaModule } from './bma/bma.module';
import { appRoutes } from './routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    CoreModule,
    SharedModule,
	BmaModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
