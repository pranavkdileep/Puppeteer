const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://keys-shop.in/product/netflix-watch-movies-shows-private-profile/');
  await page.setViewport({
    width: 1024,
    height: 1400,
    deviceScaleFactor: 0.35, // Adjust the scale factor as needed
  });
  await page.screenshot({path:'screenshot.png'});
  await browser.close();
})()