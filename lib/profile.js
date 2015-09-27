/**
 * profile method finds data in a give public profile page
 * @param {Object} $ - the cheerio (JQuery) parsed DOM
 * @param {String} url - a valid Linkedin profile url
 * @param {Function} callback - the callback we should call after scraping
 *  a callback passed into this method should accept two parameters:
 *  @param {Objectj} error an error object (set to null if no error occurred)
 *  @param {Object} data - the complete Linkedin Profile for the given url
 */
module.exports = function profile($, url, callback) {
  var data = { url: url }, i = 0;
  var stats = []; // global stats
  var con = $('.member-connections strong').text();
  if(con.match(/500/)) {
    data.connections = 500;
  }
  else {
    data.connections = parseInt(con.slice(0, con.length/2), 10)
  }
  data.fullname = $('.full-name').text();
  data.location = $('#location .locality').text();
  data.current = $('#overview-summary-current').text();
  data.current = data.current.slice(7, -1); // remove the word "Current"
  data.picture = $('.profile-picture img').attr('src');
  data.summary = $('.summary').text(); // element always present on page
  var skills = $('.endorse-item-name-text');
  data.skills = [];
  if(skills.length > 0) {
    for(i = 0; i < skills.length; i++) {
      data.skills.push(skills[i].children[0].data)
    }
  }
  var langs = $('#languages-view .section-item')
  if(langs.length > 0) {
    data.languages = [];
    for(i = 0; i < langs.length; i++) {
      var lang = langs[i].children[0].children[0].children[0].data;
      var fluency = langs[i].children[1].children[0].data;
      data.languages.push(lang + ' - ' + fluency);
    }
  }
  data.experience = { current: [], past: [] };
  // current experience / Work
  var current = $('.current-position');
  if(current.length > 0) {
    for(i = 0; i < current.length; i++) {
      var exp = {};
      var id = current[i].attribs.id;
      // console.log(id);
      exp.title = $('#'+id +' h4 a').text();
      // exp.logo = $('#'+id +' .experience-logo img').attr('src');
      h5 = $('#'+id +' h5')
      // console.log(h5);
      if(h5.length > 1) {
        exp.org = h5[1].children[0].children[0].data.trim();
      } else {
        exp.org = h5[0].children[0].children[0].data.trim();
      }
      var date = $('#'+id +' .experience-date-locale').text().trim();
      exp.date = date.slice(0, date.indexOf(')')) + ')';
      exp.locaion = $('#'+id +' .locality').text().trim();
      exp.desc = $('#'+id +' .description').text().trim();
      data.experience.current.push(exp);
    }
  }
  // we could attempt to "DRY" this out ... Later!! First make it work!
  var past = $('.past-position');
  console.log(past);
  if(past.length > 0) {
    for(i = 0; i < past.length; i++) {
      var exp = {};
      var id = past[i].attribs.id;
      console.log(id);
      exp.title = $('#'+id +' h4 a').text();
      // exp.logo = $('#'+id +' .experience-logo img').attr('src');
      h5 = $('#'+id +' h5')
      // console.log(h5);
      if(h5.length > 1) {
        exp.org = h5[1].children[0].children[0].data.trim();
      } else {
        exp.org = h5[0].children[0].children[0].data.trim();
      }
      var date = $('#'+id +' .experience-date-locale').text().trim();
      exp.date = date.slice(0, date.indexOf(')')) + ')';
      exp.locaion = $('#'+id +' .locality').text().trim();
      exp.desc = $('#'+id +' .description').text().trim();
      data.experience.past.push(exp);
    }
  }
  callback(null, data);
}
