var test    = require('tape');
var fs      = require('fs');
var cheerio = require('cheerio');
var profile = require('../lib/profile');

test('Parse Simon\'s Public Profile Page', function(t) {
  var file = __dirname + '/fixtures/simonlab.html'
  fs.readFile(file, function(err, html){
    // console.log(err, html);
    var $ = cheerio.load(html);
    var url = 'https://uk.linkedin.com/in/simonlab';
    profile($,url, function(err, data){
      t.ok(err === null, 'No Errors when parsing Simon\'s public profile page.');
      t.ok(data.connections > 68, 'Simon has: '+data.connections + ' connections');
      t.ok(data.fullname === 'Simon Labondance', 'Fullname: '+data.fullname);
      t.ok(data.location === 'London, Greater London, United Kingdom', 'Location: '+data.location)
      t.ok(data.current === 'Founders & Coders C.I.C', 'Current Work: '+data.current);
      console.log(data);
      t.end();
    })
  })
})
