describe('Example', () => {
  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
    await element(by.id('hello_button')).tap();
    await expect(element(by.text('Hello!!!'))).toBeVisible();
    await device.reloadReactNative();
    await element(by.id('world_button')).tap();
    await expect(element(by.text('World!!!'))).toBeVisible();
  });
});
