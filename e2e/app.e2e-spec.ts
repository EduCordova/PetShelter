import { WebanimalPage } from './app.po';

describe('webanimal App', () => {
  let page: WebanimalPage;

  beforeEach(() => {
    page = new WebanimalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
