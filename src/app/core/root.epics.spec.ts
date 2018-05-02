/**
 * Copyright 2017 Dell Inc. or its subsidiaries. All Rights Reserved.
 */
import { inject, TestBed } from '@angular/core/testing';

import { RootEpics } from './root.epics';

describe('RootEpics', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RootEpics]
    });
  });

  it('should be created', inject([RootEpics], (service: RootEpics) => {
    expect(service).toBeTruthy();
  }));
});
