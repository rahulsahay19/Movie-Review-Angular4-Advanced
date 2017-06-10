import { MovieReviewPage } from './app.po';

describe('green-nations App', () => {
  let page: MovieReviewPage;

  beforeEach(() => {
    page = new MovieReviewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
