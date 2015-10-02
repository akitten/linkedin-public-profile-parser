var fetcher = require('./fetcher');
var parser  = require('./profile');

module.exports = function(url, next) {
  fetcher(url, function(err, url, html){
    parser(url, html, function(err, data){
      next(err, data);
    })
  })
}
