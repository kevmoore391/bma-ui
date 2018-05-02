/**
 * Copyright 2017 Dell Inc. or its subsidiaries. All Rights Reserved.
 */
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import {
  ActionsObservable,
  combineEpics,
  createEpicMiddleware,
  Epic,
  EpicMiddleware
} from 'redux-observable';
import { Observable } from 'rxjs/Observable';

/**
 * https://redux-observable.js.org/
 */
@Injectable()
export class RootEpics {

  // inject feature epics
  constructor() { }

  example1(action$: ActionsObservable<any>): Observable<object> {
    return action$.ofType('example1')
      .switchMap(() => Observable.of({ type: 'another action' }));
  }

  example2(action$: ActionsObservable<any>): Observable<object> {
    return action$.ofType('example2')
      .switchMap(() => Observable.of({ type: 'cool action' }));
  }

  rootEpic(): Epic<any, {}, any> {
    return combineEpics(
      this.example1,
      this.example2
      // other epics via injections
    );
  }

  middleware(): EpicMiddleware<any, {}, any> {
    return createEpicMiddleware(this.rootEpic());
  }
}
