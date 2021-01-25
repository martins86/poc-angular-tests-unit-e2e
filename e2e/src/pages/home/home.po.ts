import { browser, by, element } from 'protractor';

export class HomePage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText() {
    return element(by.css('h1')).getText();
  }

  getPoints() {
    return element(by.cssContainingText('div', 'Pontos')).$('span').getText();
  }

  getPlus1Button() {
    return element(by.cssContainingText('button', '+ 1'));
  }

  getResetButton() {
    return element(by.cssContainingText('button', 'Reset'));
  }
}
