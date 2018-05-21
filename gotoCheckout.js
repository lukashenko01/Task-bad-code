var assert = require('assert');
var webdriver = require('selenium-webdriver');

    By = webdriver.By;
    until = webdriver.until;




    var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

    driver.get('http://2.qa.2min.club');
    driver.findElement(By.xpath('//*[@id="txb-email"]')).sendKeys('mymail9@gmail.com').then(
    function(){
      driver.findElement(By.xpath('//*[@id="submitButton"]')).click();
    });
    driver.wait(until.stalenessOf(driver.findElement(By.xpath('//*[@id="default-gw-ctrl"]'))),50000,'huina ne propala').then(
      function(){
        driver.findElement(By.xpath('//*[@id="content"]/div[6]/div[1]/div[1]/div/div[2]/a')).click();
      }
    );
    driver.wait(until.urlContains('http://2.qa.2min.club/nxnbeauty/products?productId=138'),50000,'not loaded').then(
      function(){
          driver.findElement(By.xpath('//*[@id="desktop-btn-atc"]')).click();
      }
    );
    driver.wait(until.urlContains('http://2.qa.2min.club/CartV2/SecureCheckout'),70000,'checkout not loaded').then(
      function(){
        driver.findElement(By.xpath('//*[@id="forms-view-model"]/form/div[1]/div[1]/input')).sendKeys('Dmytro');
        driver.findElement(By.xpath('//*[@id="forms-view-model"]/form/div[1]/div[2]/input')).sendKeys('Lukashenko');
        driver.findElement(By.xpath('//*[@id="forms-view-model"]/form/div[1]/div[3]/input')).sendKeys('Kakwehfb');
        driver.findElement(By.xpath('//*[@id="forms-view-model"]/form/div[1]/div[4]/input')).sendKeys('wejhfvwe');
        driver.findElement(By.xpath('//*[@id="forms-view-model"]/form/div[1]/div[5]/input')).sendKeys('wgergwrgweh');
        driver.findElement(By.xpath('//*[@id="destination-state"]')).sendKeys('Arizona');
        driver.findElement(By.xpath('//*[@id="postal-code"]')).sendKeys('12345');}).then( function () {
            driver.executeScript("window.scrollBy(0,500)");
            driver.sleep(10000);
          });//.then( function() {

//

              //                        driver.findElement(By.xpath('//*[@id="recurly-number"]/div/iframe')).sendKeys('4000-0000-0000-0010');
            //                          driver.findElement(By.xpath('//*[@id="recurly-month"]/div/iframe')).sendKeys('05');
            //                          driver.findElement(By.xpath('//*[@id="recurly-year"]/div/iframe')).sendKeys('20');
          //                            driver.findElement(By.xpath('//*[@id="recurly-cvv"]/div/iframe')).sendKeys('123');
    //                                  driver.findElement(By.xpath('//*[@id="agree-to-recurring-lg"]')).click();
    //  });
      //  driver.findElement(By.xpath('//*[@id="process-checkout-button"]"]')).click();
