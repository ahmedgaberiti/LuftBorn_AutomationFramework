
import { test, expect } from '@playwright/test';

 const data =  JSON.parse(JSON.stringify(require("../test-data/searchData.json")));


test('eBay basic search flow', async ({ page }) => {
  // Navigate to eBay
  await page.goto('https://www.ebay.com/');

  //Handle cookie banners / common popups
  const acceptBtn = page.getByRole('button', { name: /accept|agree|allow|i agree/i });
  if (await acceptBtn.count()) await acceptBtn.first().click().catch(() => {});

  // Validate landed on main page
  await expect(page).toHaveURL(/ebay.com/);

  // Search for query from external test data
  const searchInput = page.locator('input[aria-label="Search for anything"]');
  await searchInput.fill(data.searchQuery);
   await  page.locator('button[type="submit"]').click();



    // Wait for results to load
await page.locator('ul.srp-results > li.s-card').first().waitFor({ state: 'visible' });
const resultsList = page.locator('ul.srp-results > li.s-card');

 // Validate results page count and log titles
console.log('Results list count:', await resultsList.count());
for (let i = 0; i < await resultsList.count(); i++) {
  const item = resultsList.nth(i);
  const title = await item.locator('div[role="heading"][aria-level="3"].s-card__title > span.su-styled-text').innerText();
  console.log(`Result ${i + 1} title: ${title}`);
}

// Note: Sorry,I can't find (From the left hand side filter using "Transmission" -> "Manual") in ebay website

});