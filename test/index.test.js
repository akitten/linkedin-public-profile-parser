var test     = require('tape');
var lp = require('../lib/index');

test('Force url error by not setting a url', function(t){
	var url;
	lp(url, function(err, data){
    t.ok(err === 404, 'Instant 404 Error when url not set');
	t.ok(data.url === undefined, 'Url is undefined when it is not set');
		t.end();
	})
})

test('Force 404 error by supplying a mal-formed url', function(t){
	var url = 'https://uk.linkedin.com/in/simonlabond';
	lp(url, function(err, data){
    t.ok(err === 404, 'Instant 404 Error when url not set');
	t.ok(data.url === 'https://uk.linkedin.com/in/simonlabond', 'Return the mal-formed url');
		t.end();
	})
})

test('Successfully Parse Elon\'s Public LinkedIn Profile Page ', function(t){
	var url = 'https://www.linkedin.com/in/emusk';
	lp(url, function(err, data){
    t.ok(err === null, 'No error when viewing Elon\'s Profile');
		t.end();
	})
})

// https://www.linkedin.com/in/emusk
