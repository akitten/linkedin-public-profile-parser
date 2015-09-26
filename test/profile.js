var test     = require('tape');
var lp = require('../lib/index');

test('Parse Simon\'s Public Profile Page', function(t){
  var url = 'https://uk.linkedin.com/in/simonlab';
	lp(url, function(err, data){
    t.ok(err === null, 'Instant 404 Error when url not set');
		t.end();
	})
})
