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

  async claimItemForm(testController, firstName, lastName, email, phone, location, time, features, comments) {
    await testController.typeText('#first-name-form', firstName);
    await testController.typeText('#last-name-form', lastName);
    await testController.typeText('#email-form', email);
    await testController.typeText('#phone-form', phone);
    await testController.typeText('#location-lost-form', location);
    await testController.typeText('#date-lost-form', time);
    await testController.typeText('#features-form', features);
    await testController.typeText('#comments-form', comments);
    await testController.click('#submit-button');
  }
}

export const claimItemPage = new ClaimItemPage();
