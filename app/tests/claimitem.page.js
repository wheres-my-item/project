import { Selector } from 'testcafe';

class ClaimItemPage {
  constructor() {
    this.pageId = '#claim-item-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async claimItemForm(testController, firstname, lastname, email, phone, locationlost, datelost, features, comments) {
    await testController.typeText('#firstName', firstname);
    await testController.typeText('#lastName', lastname);
    await testController.typeText('#email', email);
    await testController.typeText('#phone', phone);
    await testController.typeText('#location', locationlost);
    await testController.typeText('#time', datelost);
    await testController.typeText('#features', features);
    await testController.typeText('#comments', comments);
    await testController.click('#submit-button');
  }
}

export const claimItemPage = new ClaimItemPage();
