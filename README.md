# LinkedIn *Public* Profile Page Parser

*Parse* data from ***Public*** LinkedIn Profile Page ***for educational purposes***.   

[![Build Status](https://travis-ci.org/nelsonic/linkedin-public-profile-parser.svg)](https://travis-ci.org/nelsonic/linkedin-public-profile-parser)
[![codecov.io](http://codecov.io/github/nelsonic/linkedin-public-profile-parser/coverage.svg?branch=master)](http://codecov.io/github/nelsonic/linkedin-public-profile-parser?branch=master)
[![bitHound Score](https://www.bithound.io/github/nelsonic/linkedin-public-profile-parser/badges/score.svg)](https://www.bithound.io/github/nelsonic/linkedin-public-profile-parser)
[![Dependency Status](https://david-dm.org/nelsonic/linkedin-public-profile-parser.svg)](https://david-dm.org/nelsonic/linkedin-public-profile-parser)
[![devDependency Status](https://david-dm.org/nelsonic/linkedin-public-profile-parser/dev-status.svg)](https://david-dm.org/nelsonic/linkedin-public-profile-parser#info=devDependencies)

## Why?

The LinkedIn API *used* to be *really good* (*back in 2012* ... )
but in 2015 someone decided to reduce access to "*normal developers*" so they can charge "*partners*" for increased access ...

If there was a way to get profile data directly from the API
we would *not* have to waste our time
***Parsing*** the ***Public Profile Pages*** ...

But, that's the [*state*](http://stackoverflow.com/questions/tagged/linkedin)
we're in, so this is what we *have* to do.

## What?

As the name suggests this node.js module lets you
parse the *public* profile page for any LinkedIn profile
by supplying a valid LinkedIn URL.


## How?

```sh
curl -A "Mozilla/5.0 (Windows; U; Windows NT 5.1; de; rv:1.9.2.3) Gecko/20100401 Firefox/3.6.3" https://uk.linkedin.com/in/simonlab -o test/linkedin/simon-labondance-founders.html
```



curl -A "Mozilla/5.0 (Windows NT 5.1; rv:19.0) Gecko/20100101 Firefox/19.0" https://uk.linkedin.com/in/simonlab -o test/simon-labondance-founders.html


## tl;dr

Because LinkedinIn has blocked the IP address of any server
running on the Amazon or DigitalOcean cloud
see: http://stackoverflow.com/a/32615188/1148249
we are unable to run a full end-to-end test on Travis-CI.

Our work-around for this is that Travis-CI tests our *parser*
but not our "*requester*". To run the *full* (*end-to-end*) test suite
use `npm run full`
