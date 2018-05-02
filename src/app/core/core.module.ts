/**
 * Copyright 2017 Dell Inc. or its subsidiaries. All Rights Reserved.
 */
import { NgReduxFormModule, provideReduxForms } from '@angular-redux/form';
import { NgReduxRouter, NgReduxRouterModule } from '@angular-redux/router';
import { DevToolsExtension, NgRedux, NgReduxModule } from '@angular-redux/store';
import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import * as persistState from 'redux-localstorage';

import { environment } from '../../environments/environment.hmr';
import { rootReducer } from '../root.reducer';
import { SharedModule } from '../shared/shared.module';
import { AppState } from './app-state.model';
import { RootEpics } from './root.epics';

/**
 * Setup Store, Epics, singleton providers, et al.
 */
@NgModule({
  imports: [
    CommonModule,
    NgReduxModule,
    NgReduxFormModule,
    NgReduxRouterModule,
    SharedModule
  ],
  providers: [RootEpics]
})
export class CoreModule {
  constructor(
    @Optional() @SkipSelf() parent: CoreModule,
    private store: NgRedux<AppState>,
    private devTools: DevToolsExtension,
    private storeRouter: NgReduxRouter,
    private epics: RootEpics
  ) {
    if (parent) {
      throw new Error('CoreModule already imported');
    }

    const initState = {};  // Collect initState from features if necessary;

    const middleware = [
      epics.middleware()
      // ... other middleware
    ];

    const enhancers = [];

    if (!environment.production && devTools.isEnabled()) {
      enhancers.push(devTools.enhancer());
    }

    if (environment.hmr) {
      enhancers.push(persistState());
    }

    if (storeRouter) {
      storeRouter.initialize();
    }

    provideReduxForms(store);

    store.configureStore(rootReducer, initState, middleware, enhancers);
  }
}
