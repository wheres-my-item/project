import { Selector } from 'testcafe';

class HomePage {
  constructor() {
    this.pageId = '#user-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async testAccordions(testController) {
    await testController.click('#accordion4');
    await testController.click('#accordion3');
    await testController.click('#accordion2');
    await testController.click('#accordion1');
  }
}

export const homePage = new HomePage();
