var Wreck   = require('wreck');
var chalk   = require('chalk');
var agent = 'Mozilla/5.0 (Windows; U; Windows NT 5.1; de; rv:1.9.2.3) Gecko/20100401 Firefox/3.6.3';
console.log(agent);
var wreck = Wreck.defaults({
    headers: { 'User-Agent': agent }
});
var url = 'https://www.linkedin.com/in/emusk';
var options = {
  url: url,
  cache: 'Archive.org'
}
var uri = 'http://cachedview.com/redirect.php'
// centralised request issuer/hander

var next = function (err, res) {

    /* handle err if it exists, in which case res will be undefined */
    console.log(res);
    // buffer the response stream
    Wreck.read(res, null, function (err, body) {
    console.log(err, body.toString())
    });
};


wreck.request('GET', uri, options, next)
//   if(url.match(/musk/)){
//     console.log(response)
//     console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - - - \n')
//     console.log(html.toString());
//   }
//   if (error || !response || response.statusCode !== 200) {
//     console.log(chalk.bgRed.black(" - - - URL FAIL >> " + url + "  - - - "));
//     // console.log(error, response.headers);
//     // console.log(' - - - - - - - - - - - - - - - - - - - - - - - - - - -')
//     console.log(error)
//     console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - - - \n')
//     console.log(response.headers)
//     console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - - - \n')
//
//     callback(404);
//   }
// });
