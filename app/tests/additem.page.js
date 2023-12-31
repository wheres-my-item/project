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

  async addItemForm(testController, name, description, image) {
    await testController.typeText('#name-form', name);
    await testController.click('#category-form');
    await testController.click('#category-form');
    await testController.click('#color-form');
    await testController.click('#color-form');
    await testController.typeText('#description-form', description);
    await testController.typeText('#image-form', image);
    await testController.click('#submit-button');
  }
}

export const addItemPage = new AddItemPage();
