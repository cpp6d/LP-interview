import { LpInterviewPage } from './app.po';

describe('lp-interview App', function() {
  let page: LpInterviewPage;

  beforeEach(() => {
    page = new LpInterviewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
