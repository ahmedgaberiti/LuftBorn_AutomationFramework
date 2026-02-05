class ProductPage {

constructor(page)
{
    this.page = page;
    this.searchInput = page.locator('input[aria-label="Search for anything"]');
    this.searchButton = page.locator('button[type="submit"]');
    this.productTitles = page.locator('ul.srp-results > li.s-card');
 

}

async searchForItem(itemName)
{
    await this.searchInput.fill(itemName);
    await this.searchButton.click();
}

async getProductTitles()
{
await this.productTitles.first().waitFor({ state: 'visible' });
const resultsList = this.productTitles;
console.log('Results list count:', await resultsList.count());
for (let i = 0; i < await resultsList.count(); i++) {
  const item = resultsList.nth(i);
  const title = await item.locator('div[role="heading"][aria-level="3"].s-card__title > span.su-styled-text').innerText();
 console.log(`Result ${i + 1} title: ${title}`);
 
}


}

}


module.exports = {ProductPage};