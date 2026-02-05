class HomePage {

constructor(page)
{
    this.page = page;
 

}

async goToEbayWebsite()
{
    await this.page.goto("https://www.ebay.com/");
}

async validateLandedOnMainPage()
{
    await this.page.waitForURL(/ebay.com/);
}

async handleCookiesifPresent()
{
    const acceptBtn = this.page.getByRole('button', { name: /accept|agree|allow|i agree/i });
  if (await acceptBtn.count()) await acceptBtn.first().click().catch(() => {});
}


}
module.exports = {HomePage};