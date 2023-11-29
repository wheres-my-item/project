import { Selector } from 'testcafe';

class AdminPage {
  constructor() {
    this.pageId = '#admin-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async gotoAddItemPage(testController) {
    await this.isDisplayed(testController);
    await testController.click('#add-item-button');
  }

  async testAccordions(testController) {
    await testController.click('#unclaimed-items-button');
    await testController.click('#claimed-items-button');
    await testController.click('#claimed-items-button');
  }

  /*
  async testClaimedItemsEditButton(testController) {
    await testController.click('#claimed-items-edit-button');
  }
   */

  async testUnclaimedItemsEditButton(testController) {
    await testController.click('#unclaimed-items-edit-button');
  }
}

export const adminPage = new AdminPage();
