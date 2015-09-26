var fs      = require('fs');
var Wreck   = require('wreck');
var agent   = 'Mozilla/5.0 (Windows; U; Windows NT 5.1; de; rv:1.9.2.3) Gecko/20100401 Firefox/3.6.3';
var wreck   = Wreck.defaults({
    headers: { 'User-Agent': agent }
});
var cheerio = require('cheerio');
var chalk   = require('chalk');
var urls    = [
  'https://www.linkedin.com/pub/abdi-ahmed/100/384/6b0', // Abdi
  'https://www.linkedin.com/in/emusk',                   // Elon
  'https://uk.linkedin.com/in/simonlab'                  // Simon
];
var files   = [
  'abdi-ahmed.html',
  'emusk.html',
  'simonlab.html'
];

function req (index) {
  var url = urls[index];
  var file = __dirname + '/fixtures/' + files[index];
  wreck.get(url, function (error, response, html) {
    if (error || !response || response.statusCode !== 200) {
      console.log(chalk.bgRed.black(" - - - URL FAIL >> " + url + "  - - - "));
      // console.log(error, response.headers);
      // console.log(' - - - - - - - - - - - - - - - - - - - - - - - - - - -')
      console.log(error)
      console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - - - \n')
      console.log(response.headers)
      console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - - - \n')
    }
    else {
      console.log(chalk.bgGreen.black(" - - - Linkedin Public Profile Parser >> "+url +"  - - - "));
      // console.log(html.toString());
      fs.writeFile(file, html.toString(), function(err, data){
        console.log('done');
      })
    }
  });
}

for(var i = 0; i < urls.length; i++) {
  req(i);
}
