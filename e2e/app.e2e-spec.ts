import { HeaderExercisePage } from './app.po';

describe('header-exercise App', function() {
  let page: HeaderExercisePage;

  beforeEach(() => {
    page = new HeaderExercisePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
