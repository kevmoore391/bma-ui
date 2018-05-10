/**
 * Copyright 2017 Dell Inc. or its subsidiaries. All Rights Reserved.
 */
import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BmaComponent } from './bma/bma.component';
import { TribeComponent } from './tribe/tribe.component';

const featureRoutes: Routes = [
  { path: '', component: BmaComponent}
];

export const appRoutes: Routes = [...featureRoutes];
