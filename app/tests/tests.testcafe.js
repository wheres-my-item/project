import { landingPage } from './landing.page';
import { signinPage } from './signin.page';
import { signoutPage } from './signout.page';
import { navBar } from './navbar.component';
import { homePage } from './home.page';
import { foundItemsPage } from './founditems.page';
import { claimItemPage } from './claimitem.page';
import { adminPage } from './admin.page';
import { addItemPage } from './additem.page';
import { signupPage } from './signup.page';

/* global fixture:false, test:false */

/** Credentials for one of the sample users defined in settings.development.json. */
const credentials = { username: 'john@foo.com', password: 'changeme' };
const adminCredentials = { username: 'admin@foo.com', password: 'changeme' };
const registerCredentials = { username: 'register@foo.com', password: 'changeme' };
const claimItemTest = { firstname: 'Jane', lastname: 'Doe', email: 'email@gmail.com', phone: '(123)456-7890', locationlost: 'Library', datelost: 'October 31, 2023', features: 'Dog Sticker', comments: 'None' };
const addItemTest = { name: 'Jane Doe', color: 'Red', location: 'Library', description: 'Lost' };

fixture('meteor-application-template-react localhost test with default db')
  .page('http://localhost:3000');

test('Test that landing page shows up', async (testController) => {
  await landingPage.isDisplayed(testController);
});

test('Test that sign-in works', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.isLoggedIn(testController, credentials.username);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});

test('Test that the "Home" page works', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoHomePage(testController);
  await homePage.isDisplayed(testController);
});

test('Test that the "Found Items" page works', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoFoundItemsPage(testController);
  await foundItemsPage.isDisplayed(testController);
  await foundItemsPage.claimThisItem(testController);
  await claimItemPage.isDisplayed(testController);
});

test('Test that the "Claim Item" page works', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoClaimItemPage(testController);
  await claimItemPage.isDisplayed(testController);
  await claimItemPage.claimItemForm(testController, claimItemTest.firstname, claimItemTest.lastname, claimItemTest.email, claimItemTest.phone, claimItemTest.locationlost, claimItemTest.datelost, claimItemTest.features, claimItemTest.comments);
  // test "upload an image" when finalized
});

test('Test that the "Admin" page works', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, adminCredentials.username, adminCredentials.password);
  await navBar.isLoggedIn(testController, adminCredentials.username);
  await navBar.gotoAdminPage(testController);
  await adminPage.isDisplayed(testController);
  await adminPage.testAccordions(testController);
  await adminPage.testClaimedItemsEditButton(testController);
  // test edit page when finalized
});

test('Test that the "Add Item" page works', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, adminCredentials.username, adminCredentials.password);
  await navBar.gotoAdminPage(testController);
  await adminPage.gotoAddItemPage(testController);
  await addItemPage.isDisplayed(testController);
  await addItemPage.addItemForm(testController, addItemTest.name, addItemTest.color, addItemTest.location, addItemTest.description);
  // test upload image when finalized
});

test('Test that registering for an account works', async (testController) => {
  await navBar.gotoSignUpPage(testController);
  await signupPage.signupUser(testController, registerCredentials.username, registerCredentials.password);
});

// make sure to double check once everyone finalizes everything, tiff, don't forget!!!!!!!!
