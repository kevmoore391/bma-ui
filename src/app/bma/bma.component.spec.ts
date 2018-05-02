/**
 * Copyright 2017 Dell Inc. or its subsidiaries. All Rights Reserved.
 */
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';

import { BmaComponent } from './bma.component';

describe('BmaComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [BmaComponent]
    }).compileComponents();
  }));

  it('should create the apps', async(() => {
    const fixture = TestBed.createComponent(BmaComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(BmaComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent)
      .toContain('Business Management Applications');
  }));
  it('should render a table', async(() => {
    const fixture = TestBed.createComponent(BmaComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('table').textContent);
  }));
});
