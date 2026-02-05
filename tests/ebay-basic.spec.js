
const { test, expect } = require('@playwright/test');
 const {POManager} = require('../pageobjects/POManager');

 //Json->string->js object
const data =  JSON.parse(JSON.stringify(require("../test-data/searchData.json")));


test('eBay basic search flow', async ({ page }) => {
  // Navigate to eBay
  const poManager = new POManager(page);
  const homePage = poManager.getHomePage();
  await homePage.goToEbayWebsite();

  //Handle cookie banners / common popups
  await homePage.handleCookiesifPresent();

  // Validate landed on main page
    await homePage.validateLandedOnMainPage();

  // Search for mazda from external test data file
  const productPage = poManager.getProductPage();
  await productPage.searchForItem(data.searchQuery);
    

  // Validate results page count and log titles
    const resultstitles = await productPage.getProductTitles();
  

// Note: Sorry,I can't find (From the left hand side filter using "Transmission" -> "Manual")

});
