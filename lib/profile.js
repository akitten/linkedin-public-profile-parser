var cheerio = require('cheerio');
/**
 * profile method finds data in a give public profile page
 * @param {String} url - a valid Linkedin profile url
 * @param {String} html - the full html for the public profile page
 * @param {Function} next - the callback we should call after scraping
 *  a callback passed into this method should accept two parameters:
 *  @param {Objectj} error an error object (set to null if no error occurred)
 *  @param {Object} data - the complete Linkedin Profile for the given url
 */
module.exports = function profile(url, html, next) {
  var $ = cheerio.load(html); // use Server-Side JQuery to access DOM
  var data = { url: url };    // store all parsed data inside data object
  var i = 0;                  // we re-use this in all our for loops below
  var id;                     // id of DOM node being searched
  var exp = {};               // experience object
  var h5;                     // in experience there are several h5 tags
  var date;                   // dates in profile e.g: when job started/ended
  var con = $('.member-connections strong').text().replace('connections').trim();
  if(con.match(/500/)) {
    data.connections = 500;
  }
  else {
    // console.log('>>> ',con);
    data.connections = parseInt(con, 10)
  }

  data.fullname = $('.fn').text();
  data.location = $('#demographics .locality').text();
  data.current = $('.profile-overview-content p.headline').text().replace(/current/ig, '').trim();
  if(data.current.length < 3){
    data.current = ''; // who has a 3-letter job?! exactly! leave it blank!
  }
  // console.log('>>>>>>> Current: '+data.current);
  var img = $('.profile-picture img');
  if(img[0]) {
    data.picture = img[0]['attribs']['data-delayed-url'];
  }
  data.summary = $('#summary .description').text(); // element always present on page

  var skills = $('.skill .wrap');
  // console.log(skills);
  data.skills = [];
  if(skills.length > 0) {
    for(i = 0; i < skills.length; i++) {
      data.skills.push(skills[i].children[0].data)
    }
  }

  var langs = $('.language .wrap');
  if(langs.length > 0) {
    data.languages = [];
    for(i = 0; i < langs.length; i++) {
      var lang = langs[i].children[0].children[0].data;
      var fluency = '';
      if(langs[i].children[1] && langs[i].children[1].children[0]) {
        fluency = langs[i].children[1].children[0].data;
      }
      data.languages.push(lang + ' - ' + fluency);
    }
  }
  data.experience = {current:[], past:[]}; // empty if none listed
  var experience = [];
  var positions = $('.position');
  if(positions.length > 0) {
    for(i = 1; i < positions.length; i++) {
      exp = {}; // reset experience object
      exp.title = $('.position:nth-child('+i+') h4.item-title a').text();
      exp.org = $('.position:nth-child('+i+') h5.item-subtitle').text();
      exp.date = $('.position:nth-child('+i+') .date-range').text();
      exp.location = $('.position:nth-child('+i+') .location').text();
      if(exp.location.length === 0){
        exp.location = $('.position:nth-child('+i+') .locality').text();
      }
      exp.desc = $('.position:nth-child('+i+') .description').html();
      experience.push(exp);
    }
  }
  data.experience.current = experience.filter(function(exp){
    return exp.date.match(/Present/);
  });
  data.experience.past = experience.filter(function(exp){
    return exp.date.indexOf('Present') === -1;
  })

  next(null, data);
}
