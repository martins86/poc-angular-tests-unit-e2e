import { HomePage } from './home.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: HomePage;

  beforeEach(() => {
    page = new HomePage();
  });

  it('should display Title "Casos de Teste"', () => {
    const title = 'Casos de Teste';
    page.navigateTo();
    expect(page.getTitleText()).toEqual(title);
  });

  it('should click three times and reset with matching points', () => {
    page.navigateTo();

    expect(page.getPoints()).toBe('1');

    page.getPlus1Button().click();
    page.getPlus1Button().click();
    page.getPlus1Button().click();

    expect(page.getPoints()).toBe('4');

    page.getResetButton().click();

    expect(page.getPoints()).toBe('0');
  });

  afterEach(async () => {
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
