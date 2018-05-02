/**
 * Copyright 2017 Dell Inc. or its subsidiaries. All Rights Reserved.
 */
import { browser, by, element } from 'protractor';
import { promise } from 'selenium-webdriver';

export class TitanUi2SeedPage {
  navigateTo(): promise.Promise<any> {
    return browser.get(`${browser.params.url}/`);
  }

  getParagraphText(): promise.Promise<any> {
    return element(by.css('app-root h1')).getText();
  }
}
