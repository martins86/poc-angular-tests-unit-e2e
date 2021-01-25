import { browser, by, element } from 'protractor';

export class HomePage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): any {
    return element(by.css('h1')).getText();
  }

  getPoints(): any {
    return element(by.cssContainingText('div', 'Pontos')).$('span').getText();
  }

  getPlus1Button(): any {
    return element(by.cssContainingText('button', '+ 1'));
  }

  getResetButton(): any {
    return element(by.cssContainingText('button', 'Reset'));
  }
}
