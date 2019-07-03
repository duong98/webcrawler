import login from './login';
const cheerio = require ('cheerio');
login().then(cookies => {console.log(cookies)})
// const rp = require('request-promise');
// const options = {
//     url: 'https://www.facebook.com/duongict98/about',
//     //transform: function (body) {
//     //    return cheerio.load(body);
//     //}
// }
// rp(options)
// .then(($) => {
//     console.log($)
// })
// .catch((e) => {console.log(e)})