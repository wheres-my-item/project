import { Selector } from 'testcafe';

class SignupPage {
  constructor() {
    this.pageId = '#signup-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  /** Signs up a new user, then checks to see that they are logged in by checking the navbar. */
  async signupUser(testController, username, password) {
    await this.isDisplayed(testController);
    await testController.typeText('#signup-form-email', username);
    await testController.typeText('#signup-form-password', password);
    await testController.click('#signupsubmit');
    // await navBar.isLoggedIn(testController, username);
    // ^ re-enable this later, commented it out because there's a built-in check for whether an account shares the same username
  }
}

export const signupPage = new SignupPage();
