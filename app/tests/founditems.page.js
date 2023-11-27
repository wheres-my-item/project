import { Selector } from 'testcafe';

class FoundItemsPage {
  constructor() {
    this.pageId = '#found-items-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async claimThisItem(testController) {
    await testController.click('#claim-button');
  }
}

export const foundItemsPage = new FoundItemsPage();
