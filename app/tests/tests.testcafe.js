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
import { editItemPage } from './edititem.page';

/* global fixture:false, test:false */

/** Credentials for one of the sample users defined in settings.development.json. */
const credentials = { username: 'john@foo.com', password: 'changeme' };
const adminCredentials = { username: 'admin@foo.com', password: 'changeme' };
const registerCredentials = { username: 'register@foo.com', password: 'changeme' };
const claimItemTest = { firstName: 'Jane', lastName: 'Doe', email: 'email@gmail.com', phone: '(123)456-7890', location: 'Library', time: 'October 31, 2023', features: 'Dog Sticker', comments: 'None' };
const addItemTest = { name: 'Notebook', description: 'Lost', image: 'https://shopshorthand.com/cdn/shop/products/PinkNB_0afa6817-7218-460b-83dd-9eed4ead3080_large.jpg?v=1544579412' };

fixture('wheres-my-item localhost test with default db')
  .page('http://localhost:3000');

test('Test that landing page shows up', async (testController) => {
  await landingPage.isDisplayed(testController);
});

test('Test that default user sign-in and sign-out works', async (testController) => {
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
  await homePage.testAccordions(testController);
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
  await navBar.gotoFoundItemsPage(testController);
  await foundItemsPage.claimThisItem(testController);
  await claimItemPage.isDisplayed(testController);
  await claimItemPage.claimItemForm(testController, claimItemTest.firstName, claimItemTest.lastName, claimItemTest.email, claimItemTest.phone, claimItemTest.location, claimItemTest.time, claimItemTest.features, claimItemTest.comments);
});

test('Test that the "Admin" page works', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, adminCredentials.username, adminCredentials.password);
  await navBar.isLoggedIn(testController, adminCredentials.username);
  await navBar.gotoAdminPage(testController);
  await adminPage.isDisplayed(testController);
  await adminPage.testAccordions(testController);
  await adminPage.testUnclaimedItemsEditButton(testController);
  await editItemPage.isDisplayed(testController);
});

test('Test that the "Add Item" page works', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, adminCredentials.username, adminCredentials.password);
  await navBar.gotoAdminPage(testController);
  await adminPage.gotoAddItemPage(testController);
  await addItemPage.isDisplayed(testController);
  await addItemPage.addItemForm(testController, addItemTest.name, addItemTest.description, addItemTest.image);
});

test('Test that registering for an account works', async (testController) => {
  await navBar.gotoSignUpPage(testController);
  await signupPage.signupUser(testController, registerCredentials.username, registerCredentials.password);
});

// make sure to double check once everyone finalizes everything, tiff, don't forget!!!!!!!!
