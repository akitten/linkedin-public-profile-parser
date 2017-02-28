var fs    = require('fs');
var Wreck = require('wreck');
var wreck = Wreck.defaults({
    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 5.1; rv:19.0) Gecko/20100101 Firefox/19.0', 'accept-encoding': 'html/text' }
});

/**
 * switcher is the brains of this module!
 * it decides which scraper to use for a given url
 * @param {string} url - a valid GitHub username
 * @param {function} callback - the callback we should call after scraping
 *  a callback passed into this method should accept two parameters:
 *  @param {object} error an error object (set to null if no error occurred)
 *  @param {object} data - list of (Public) GitHub repositories (for the user)
 */
module.exports = function switcher (url, callback) {

  if(!url || typeof url === 'undefined') {
    return callback('url undefined', url);
  }
  wreck.get(url, function (error, response, html) {
    //see http://stackoverflow.com/questions/27231113/999-error-code-on-head-request-to-linkedin for 999
    if(response.statusCode === 404 ||response.statusCode === 999 ) {
      return callback(404, url);
    }

    if (error || !response || response.statusCode !== 200) {
      console.log(" - - - URL FAIL >> " + url + "  - - - ");
      console.log(error)
      console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - - - \n')
      console.log(response.headers)
      console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - - - \n')
      console.log(response.reply)
      return callback('error fetcher', url);
    }
    else {
        return callback(null, url, html);
    }
  });
}
