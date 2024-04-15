import { device, element, expect } from 'detox';

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have headers on the home screen', async () => {
    await expect(element(by.text('Trending Movies'))).toBeVisible();
  });

  it('should scroll down and see other headers', async () => {
    await element(by.id('MainScreen')).swipe('up');
    await expect(element(by.text('Trending People'))).toBeVisible();
    await expect(element(by.id('GalleryTitle').withAncestor(by.id('OtherMovies')))).toHaveText('Other Movies');
  });

  it('should have button on the home screen', async () => {
    await element(by.id('ButtonID')).tap();
    await await expect(element(by.text('Button pressed'))).toBeVisible();
  });

  it('clicking on the first preview should open the movie details screen', async () => {
    await element(by.id('TrendingMovies.image')).atIndex(0).tap();
    await expect(element(by.text('OVERVIEW'))).toBeVisible();
  });

  it('scrolling to abd clicking on the third preview should open the movie details screen', async () => {
    await element(by.id('TrendingMovies.image')).atIndex(0).swipe('left');
    await element(by.id('TrendingMovies.image')).atIndex(2).tap();
    await expect(element(by.text('OVERVIEW'))).toBeVisible();
  });
});
