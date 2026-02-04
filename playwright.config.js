const { devices } = require('@playwright/test');

const config = {
  testDir: './tests',
  retries :1,
  workers: 1,
  /* Maximum time one test can run for. */
  //10-
  timeout: 30 * 1000,
  expect: {
  
    timeout: 5000
  },
  
  reporter: 'html',
  projects : [
    
    {
      name : 'chrome',
      use: {

        browserName : 'chromium',
        headless : false,
        screenshot : 'on',
        video: 'retain-on-failure',
        ignoreHttpsErrors:true,
        permissions:['geolocation'],
        
        trace : 'on',
         }

    }
    
    ]

};

module.exports = config;
