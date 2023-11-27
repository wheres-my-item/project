import { Selector } from 'testcafe';

class AddItemPage {
  constructor() {
    this.pageId = '#add-item-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async addItemForm(testController, name, color, location, description) {
    await testController.typeText('#name-form', name);
    await testController.click('#category-button');
    await testController.click('#clothing-option');
    await testController.typeText('#color-form', color);
    await testController.typeText('#location-form', location);
    await testController.typeText('#description-form', description);
    await testController.click('#submit-button');
  }
}

export const addItemPage = new AddItemPage();
