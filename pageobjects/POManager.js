const {HomePage} = require('./HomePage');
const {ProductPage} = require('./ProductPage');
class POManager
{
constructor(page)
{
    this.page = page;
    this.homePage = new HomePage(this.page);
    this.productpage = new ProductPage(this.page);
  


}
getHomePage() 
{
    return this.homePage;
}
getProductPage()
{
    return this.productpage;

}
}   
module.exports = {POManager};