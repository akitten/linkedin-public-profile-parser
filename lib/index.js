var fetcher = require('./fetcher');
var parser  = require('./profile');

module.exports = function(url, next) {
  fetcher(url, function(err, url, html){

    if( err ){
      return next(err, {url: url});
    }

    parser(url, html, function(err, data){
      return next(err, data);
    })
  })
}
