import { SigFigDirectoryPage } from './app.po';

describe('sig-fig-directory App', function() {
  let page: SigFigDirectoryPage;

  beforeEach(() => {
    page = new SigFigDirectoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
