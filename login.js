const puppeteer = require('puppeteer');
const dotenv = require('dotenv');
dotenv.config();
//import * as puppeteer from 'puppeteer';
const login = (async () => {
  const browser = await puppeteer.launch({executablePath: process.env.CHROME_PATH})//,headless: false});
  const page = await browser.newPage();
  //Login
  await page.goto('https://www.facebook.com');
  await page.type('#email', process.env.LOGIN_EMAIL);
  await page.type('#pass', process.env.LOGIN_PASS);
  await page.click('#loginbutton input');
  await page.waitForNavigation();

  // Get cookies
  const cookies = await page.cookies();
  //console.log(cookies)

  // Use cookies in other tab or browser
  //const page2 = await browser.newPage();
  //await page2.setCookie(...cookies);
  //await page2.goto('https://www.facebook.com'); // Opens page as logged user


  // Get the "viewport" of the page, as reported by the page.
  // const dimensions = await page.evaluate(() => {
  //   return {
  //     width: document.documentElement.clientWidth,
  //     height: document.documentElement.clientHeight,
  //     deviceScaleFactor: window.devicePixelRatio
  //   };
  // });

  // console.log('Dimensions:', dimensions);

  await browser.close();
  return cookies
});
export default login;
//get html
// login().then(cookies => {
//   //const cheerio = require('cheerio');
//   //console.log(cookies[0].value)
//   const cookie = toString(cookies[0].value)
//   console.log(cookie)

// });
// const rp = require('request-promise');
// //const cookiejar = rp.cookie()
// //cookiejar.setCookie(cookie, 'https://www.facebook.com');
// const options = {
//   uri: 'https://www.facebook.com/duongict98/about',
//   //jar: cookiejar // Tells rp to include cookies in jar that match uri
// };
// rp(options)
// .then(function ($) {
//   console.log($)
// })
// .catch(e =>{console.log(e)})