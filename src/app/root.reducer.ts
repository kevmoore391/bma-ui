/**
 * Copyright 2017 Dell Inc. or its subsidiaries. All Rights Reserved.
 */
import { composeReducers, defaultFormReducer } from '@angular-redux/form';
import { combineReducers } from 'redux';

export const rootReducer = composeReducers(
  defaultFormReducer()
  /*** Place reducers inside the following function ***/
  // combineReducers({
  //
  //
  // })
);
