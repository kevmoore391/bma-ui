/**
 * Copyright 2017 Dell Inc. or its subsidiaries. All Rights Reserved.
 */
import { TitanUi2SeedPage } from './app.po';

describe('titan-ui2-seed App', () => {
  let page: TitanUi2SeedPage;

  beforeEach(() => {
    page = new TitanUi2SeedPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to Titan UI 2.0 seed project!');
  });
});
