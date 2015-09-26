# LinkedIn *Public* Profile Parser

*Parse* data from ***Public*** LinkedIn Profile Page ***for educational purposes***.   

[![Build Status](https://travis-ci.org/nelsonic/linkedin-public-profile-parser.svg)](https://travis-ci.org/nelsonic/linkedin-public-profile-parser)

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
