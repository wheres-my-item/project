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

  async claimItemForm(testController, firstname) {
    // ,lastname, email, phone, locationlost, datelost, features, comments
    await testController.typeText('#first-name-form', firstname);
    // await testController.typeText('#last-name-form', lastname);
    // await testController.typeText('#email-form', email);
    // await testController.typeText('#phone-form', phone);
    // await testController.typeText('#location-lost-form', locationlost);
    // await testController.typeText('#date-lost-form', datelost);
    // await testController.typeText('#features-form', features);
    // await testController.typeText('#comments-form', comments);
    // await testController.click('#submit-button');
  }
}

export const claimItemPage = new ClaimItemPage();
