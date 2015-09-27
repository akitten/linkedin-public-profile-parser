var test    = require('tape');
var fs      = require('fs');
var cheerio = require('cheerio');
var profile = require('../lib/profile');

test('Zumra\'s Public Profile Page is EMPTY!', function(t) {
  var file = __dirname + '/fixtures/zumra.html'
  fs.readFile(file, function(err, html){
    var $ = cheerio.load(html);
    var url = 'https://uk.linkedin.com/pub/z%C3%BCmra-kinali/2b/731/b5b';
    profile($,url, function(err, data){
      // console.log(data);
      t.ok(data.fullname === 'zümra kinali', 'Name: '+data.fullname);
      t.ok(data.connections === 0, 'ZERO Connections: '+ data.connections);
      t.ok(data.skills.length === 0, 'ZERO Skills '+data.skills);
      t.ok(data.current.length === 0, 'No current employment/expierience '+data.current)
      t.end();
    })
  })
})

test('Parse Simon\'s Public Profile Page', function(t) {
  var file = __dirname + '/fixtures/simonlab.html'
  fs.readFile(file, function(err, html){
    var $ = cheerio.load(html);
    var url = 'https://uk.linkedin.com/in/simonlab';
    profile($,url, function(err, data){
      t.ok(err === null, 'No Errors when parsing Simon\'s public profile page.');
      t.ok(data.connections > 68, 'Simon has: '+data.connections + ' connections');
      t.ok(data.fullname === 'Simon Labondance', 'Fullname: '+data.fullname);
      t.ok(data.location === 'London, Greater London, United Kingdom', 'Location: '+data.location)
      t.ok(data.current === 'Founders & Coders C.I.C', 'Current Work: '+data.current);
      t.ok(data.picture.indexOf('.jpg') > -1, 'Profile Picture: '+data.picture);
      t.ok(data.languages[2].indexOf('Espagnol') > -1, 'Simon knows '+ data.languages[2]);
      t.end();
    })
  })
})

test('Parse Abdi\'s Public Profile Page', function(t) {
  var file = __dirname + '/fixtures/abdi-ahmed.html'
  fs.readFile(file, function(err, html){
    var $ = cheerio.load(html);
    var url = 'https://www.linkedin.com/pub/abdi-ahmed/100/384/6b0';
    profile($,url, function(err, data){
      t.ok(data.connections > 36, 'Abdi has: '+data.connections + ' connections');
      t.ok(data.summary.indexOf('teacher') > -1, 'Summary contains "teacher"');
      console.log(data);
      t.end();
    })
  })
})

test('Parse Elon\'s Public Profile Page', function(t) {
  var file = __dirname + '/fixtures/emusk.html'
  fs.readFile(file, function(err, html){
    // console.log(err, html);
    var $ = cheerio.load(html);
    var url = 'https://www.linkedin.com/in/emusk';
    profile($,url, function(err, data){
      t.ok(data.connections === 500, 'Elon has: '+data.connections + ' connections');
      t.ok(data.fullname === 'Elon Musk', 'Fullname: '+data.fullname);
      t.end();
    })
  })
})

test('Parse Nelson\'s Public Profile Page', function(t) {
  var file = __dirname + '/fixtures/nelsonic.html'
  fs.readFile(file, function(err, html){
    var $ = cheerio.load(html);
    var url = 'https://www.linkedin.com/in/nelsonic';
    profile($,url, function(err, data){
      t.ok(data.connections === 500, 'Nelson has: '+data.connections + ' connections');
      t.ok(data.skills.length > 42, 'Skills: '+data.skills.length);
      t.ok(data.skills.indexOf('Node.js') > -1, 'Nelson knows Node');
      t.ok(data.languages.length > 5, 'Nelson knows '+ data.languages[5]);
      t.ok(data.languages[4].indexOf('Afrikaans') > -1, 'Nelson knows '+ data.languages[4]);
      t.end();
    })
  })
})

test.only('Parse Ines\' Public Profile Page', function(t) {
  var file = __dirname + '/fixtures/iteles.html'
  fs.readFile(file, function(err, html){
    var $ = cheerio.load(html);
    var url = 'https://www.linkedin.com/in/iteles';
    profile($,url, function(err, data){
      t.ok(data.connections === 500, 'Ines has: '+data.connections + ' connections');
      t.ok(data.skills.length > 10, 'Skills: '+data.skills.length);
      t.ok(data.skills.indexOf('Node.js') > -1, 'Ines knows Node');
      t.ok(count > 3, 'Ines is currently doing '+count + ' things ...')
      var kiva = data.experience.current[3];
      t.ok(kiva.org === 'Kiva.org', 'Ines volunteers for '+kiva.org)
      t.ok(kiva.date.indexOf('June 2007') > -1, 'Ines has been with Kiva '+ kiva.date);
      t.ok(kiva.desc.indexOf('coordinating') > -1, 'Kiva Description: '+kiva.desc)
      var count = data.experience.current.length      // console.log(data.experience.current);
      t.end();
    })
  })
})
