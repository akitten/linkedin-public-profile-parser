# LinkedIn *Public* Profile Page Parser

*Parse* data from ***Public*** LinkedIn Profile Page ***for educational purposes***.

[![Build Status](https://travis-ci.org/akitten/linkedin-public-profile-parser.svg)](https://travis-ci.org/akitten/linkedin-public-profile-parser)
[![codecov.io](http://codecov.io/github/akitten/linkedin-public-profile-parser/coverage.svg?branch=master)](http://codecov.io/github/akitten/linkedin-public-profile-parser?branch=master)
[![bitHound Score](https://www.bithound.io/github/akitten/linkedin-public-profile-parser/badges/score.svg)](https://www.bithound.io/github/akitten/linkedin-public-profile-parser)
[![Dependency Status](https://david-dm.org/akitten/linkedin-public-profile-parser.svg)](https://david-dm.org/akitten/linkedin-public-profile-parser)
[![devDependency Status](https://david-dm.org/akitten/linkedin-public-profile-parser/dev-status.svg)](https://david-dm.org/akitten/linkedin-public-profile-parser#info=devDependencies)
[![HitCount](https://hitt.herokuapp.com/nelsonic/linkedin-public-profile-parser.svg)](https://github.com/akitten/linkedin-public-profile-parser)

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

### Basic usage

> **Note**: This Node.js Module ***ONLY*** Works as a ***SERVER-Side Script***  
(LinkedIn Blocks *ALL* Browser-Based *CORS* Requests)

Install the `linkedin-public-profile-parser` package from NPM:

```sh
npm install linkedin-public-profile-parser --save
```

Then in your code:

```js
var LP = require('linkedin-public-profile-parser');
var url = 'https://uk.linkedin.com/in/simonlab';
LP(url, function(err, data){
  console.log(JSON.stringify(data, null, 2)); // see below for sample output JSON
})
```

### Want More?

if you want ***more control*** over the process try this:

```sh
curl -A "Mozilla/5.0 (Windows; U; Windows NT 5.1; de; rv:1.9.2.3) Gecko/20100401 Firefox/3.6.3" https://uk.linkedin.com/in/iteles -o test/fixtures/iteles.html
```

Then parse the html you just downloaded:

```js
var fs      = require('fs');
var profile = require('../lib/profile');
var file = __dirname + '/fixtures/iteles.html'
var url = 'https://www.linkedin.com/in/iteles';

fs.readFile(file, function(err, html) {
  profile(url, html, function(err, data){
    console.log(JSON.stringify(data, null, 2));
  })
})
```

Which will print out the following *parsed* result:

```js
{
  "url": "https://www.linkedin.com/in/iteles",
  "connections": 500,
  "fullname": "Inês Teles",
  "location": "London, United Kingdom",
  "current": "Technology Project Manager, Organiser Ladies Who Code meetup",
  "picture": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/1/005/091/3bb/0380caf.jpg",
  "summary": "What makes me tick lies at the intersection of technology with improving people's lives in big and small ways, particularly involving microfinance and education.I've spent the last 5 years in technology delivery management with Accenture, although I've been lucky to have worked with both large multinationals and with a slew of NGOs at many levels of projects (details below).Currently I'm taking some time to travel, pick up new skills (mostly in web development and in particular HTML5/CSS3, Javascript & Node.js apps - I firmly believe you can't manage effectively without knowing how to code) and translate a book on speed reading (from English to Portuguese). Ever the natural co-ordinator, I hold various positions leading teams and organising meetups (Ladies Who Code).Always happy to have a chat about anything I can help with or answer questions, get in touch!",
  "skills": [
    "Project Management",
    "Training Delivery",
    "Agile Methodologies",
    "Lean Startup",
    "JavaScript",
    "Node.js",
    "CSS",
    "HTML5",
    "Mobile Technology",
    "Business Analysis",
    "International Development",
    "Test Driven Development",
    "Stakeholder Management",
    "Management",
    "Nonprofits",
    "See 15+",
    "Program Management",
    "Market Research",
    "Business Development",
    "Requirements Gathering",
    "Business Strategy",
    "Business Process Improvement",
    "Non-profits",
    "Mobile Applications",
    "Microfinance",
    "Consulting",
    "Strategy",
    "Change Management",
    "Agile Project Management",
    "Lean Thinking",
    "AngularJS",
    "See less"
  ],
  "languages": [
    "English - Native or bilingual proficiency",
    "Portuguese - Native or bilingual proficiency",
    "Mandarin - Elementary proficiency",
    "French - Elementary proficiency"
  ],
  "experience": {
    "current": [
      {
        "title": "Cheerleader & Mentor",
        "org": "Founders & CodersD'Eynsford Tenant Management Organisation CIC",
        "date": "October 2014 – Present (1 year 3 months)September 2011 – Present (4 years 4 months)",
        "location": "London, United Kingdom",
        "desc": "I&apos;m beyond excited to be involved with the UK&apos;s first completely free coding academy, where I have been invited to be a director and play a role in supporting the students on a day-to-day basis.<br>The curriculum is based on a Javascript stack with a TDD approach. Aside from the code itself, the aim is for the students to learn how to learn and solve any bugs in a tightly collaborative fashion.<br>It&apos;s pretty awesome!"
      },
      {
        "title": "Co-organiser",
        "org": "Ladies Who Code",
        "date": "September 2014 – Present (1 year 4 months)",
        "location": "London, United Kingdom",
        "desc": "We run high quality monthly events for a community of 1,500 London-based women.<br>If you&apos;re interested in learning more or collaborating, please check out http://www.meetup.com/Ladies-Who-Code-UK/ and drop me an email."
      },
      {
        "title": "Co-Founder & Full-Stack Developer",
        "org": "Q",
        "date": "January 2014 – Present (2 years)",
        "location": "London, United Kingdom",
        "desc": "Developing a number of small but scalable test apps to expand my skills.<br>I&apos;m focusing my efforts on information architecture and agile methodologies (becoming a Certified ScrumMaster was a part of this) as well as:<br>&#x2022; Accessibility<br>&#x2022; UX<br>&#x2022; HTML5/CSS3 (plus experimenting with Bootstrap &amp; Foundation for rapid prototyping)<br>&#x2022; Sass/LESS<br>&#x2022; ReactJS<br>&#x2022; Javascript<br>&#x2022; NodeJS (including usage of hapi)<br>&#x2022; Deployment to Heroku and Amazon Web Services (AWS)"
      },
      {
        "title": "Portuguese - English Translator",
        "org": "Kiva.org",
        "date": "June 2007 – Present (8 years 7 months)",
        "location": "",
        "desc": "Kiva are a non-profit who use the internet and a worldwide network of microfinance institutions to let individuals lend money to help create opportunity around the world.<br>I have been a translator since 2007, translating (mostly Mozambiquan) loan requests and stories from Portuguese to English, helping set up the initial Portuguese translation scheme and coordinating Portuguese translations for the site."
      }
    ],
    "past": [
      {
        "title": "Mobility Manager",
        "org": "Accenture",
        "date": "November 2012 – June 2013 (8 months)",
        "location": "London, United Kingdom",
        "desc": "Accenture Mobility delivers the strategies and solutions that prepare clients and their customers to meet the demands and seize the opportunities that mobility presents. As part of the Sales &amp; Consulting team, my responsibilities include:<br>&#x2022; Business development including pitches, demos and shaping scalable, data-driven projects with new clients<br>&#x2022; Project and bid support as a Subject Matter Expert in Mobility Strategy development, mobile business analytics &amp; field workforce<br>&#x2022; Mobile application development delivery management"
      },
      {
        "title": "Technology Fundamentals Faculty",
        "org": "Accenture",
        "date": "October 2012 – November 2012 (2 months)",
        "location": "",
        "desc": "Part of the faculty team who ran the first two weeks of training for the October 2012 intake of Accenture UK graduate entrants to the Analyst Consulting Group (TGP-aligned), teaching a broad range of sessions from &apos;Organisation Introduction&apos; through &apos;Requirements Gathering&apos; as well as &apos;Bug Fixing&apos; and Microsoft Office sessions. We added numerous extra sessions into the curriculum to answer the analysts&apos; questions and add to their transferrable skills."
      },
      {
        "title": "Accenture Development Partnerships Senior Consultant",
        "org": "Accenture",
        "date": "June 2011 – October 2012 (1 year 5 months)",
        "location": "London, United Kingdom",
        "desc": "Accenture Development Partnerships is a non-profit group within Accenture that provides management consulting, technology and project management services to the international development sector. Following my year at ADP overseeing a variety of international projects for<br>the organisation I have been recommended for early promotion to Manager. Responsibilities included:<br>&#x2022; Building and managing relationships with development charities, government agencies and international donors<br>&#x2022; Operational, project management and delivery support to our international projects<br>&#x2022; Business development, sales and thought leadership for current and potential clients<br><br>Areas of specialism include:<br>&#x2022; Microfinance<br>&#x2022; Information Communications Technology for Development (ICT4D)"
      },
      {
        "title": "Consultant/Project Manager",
        "org": "Accenture",
        "date": "August 2008 – July 2011 (3 years)",
        "location": "",
        "desc": "Working within the Retail space of a large global resources company, I managed 3 separate projects deploying and upgrading the SAP Business Objects reporting application across 3 different retail platforms, 13 countries and 4 continents.<br>I led a team of 9 developers and business analysts based both onshore (UK) and offshore (Malaysia &amp; India) and liaised with a wide variety of teams across the globe and at all stages of the project lifecycle (both client and internal).<br><br>This also included day-to-day project activity support where required, particularly leading requirements gathering workshops, writing design documentation, bug fixing, conducting user acceptance testing and managing pilots as well as roll out.<br><br>Prior to this, I defined the integration strategy of a head office level application with varying retail Point of Sale (POS) systems for the same global Resources company."
      },
      {
        "title": "Operations Assistant",
        "org": "Equal Exchange",
        "date": "December 2007 – July 2008 (8 months)",
        "location": "Edinburgh, United Kingdom",
        "desc": "At Equal Exchange, a small Fairtrade tea, coffee and nut producer, worked within a team of 9 people to coordinate the logistics of promoting and selling own brand fair trade products. Responsibilities included:<br>&#x2022; Daily liaison, order placing and issue resolution with both warehouse &amp; end customers<br>&#x2022; Stock control, invoicing, processing and crediting of invoices using SAGE Line50<br>&#x2022; Synthesis and documentation of business processes"
      },
      {
        "title": "Volunteer",
        "org": "One World Shop, Edinburgh",
        "date": "2005 – July 2008 (3 years)",
        "location": "Edinburgh, United Kingdom",
        "desc": "Volunteer shop cashier; stock taking and unpacking new orders; pricing and display creation."
      },
      {
        "title": "Scottish Maternity Development Part time Programme Administrator",
        "org": "NHS Education for Scotland",
        "date": "November 2007 – June 2008 (8 months)",
        "location": "",
        "desc": "&#x2022; Preparing course materials for candidate and faculty<br>&#x2022; Maintaining and updating the SMMDP index database<br>&#x2022; Collating candidate evaluations and filing course reports<br>&#x2022; General administrative support to SMMDP Manager"
      },
      {
        "title": "Volunteer Assistant Manager",
        "org": "Oxfam",
        "date": "June 2004 – January 2008 (3 years 8 months)",
        "location": "Edinburgh, United Kingdom",
        "desc": "Volunteering in a second hand clothing and the adjoining book store, undertaking every task imaginable :) Till operator, donation sorting, merchandising of new Oxfam products, day-end financial operations, opening &amp; closing the shops. In addition, I also managed the shop in the absence of the manager when required."
      },
      {
        "title": "Scottish School of Primary Care & SPPIRe Projects & Finance Administrator",
        "org": "NHS Education for Scotland",
        "date": "November 2005 – June 2007 (1 year 8 months)",
        "location": "Edinburgh, United Kingdom",
        "desc": "NHS Education funded organisation, running educational projects in the area of health. I supporting the day to day administration of all projects and teaching programmes and later took on the financial administration of these projects.<br>Responsibilities included:<br>&#x2022; Organisation of seminars and conference sessions<br>&#x2022; Diary management and travel booking for directors<br>&#x2022; Co-ordinating transfer of offices from Edinburgh to Dundee<br>&#x2022; Minute taking in meetings, meeting co-ordination, audio-typing<br>&#x2022; Mailings and promotional material design<br>&#x2022; Information processing and data entry"
      },
      {
        "title": "Co-Founder & MD",
        "org": "Fair Trade Wear",
        "date": "April 2005 – August 2006 (1 year 5 months)",
        "location": "Edinburgh, United Kingdom",
        "desc": "Founder of this Fairtrade and ethical garment embroidery &amp; screen printing company (whilst on gap year from University).<br>Responsibilities:<br>&#xB7; Web Design &amp; coding<br>&#xB7; Marketing<br>&#xB7; Customer Service<br>&#xB7; Ground Research<br>&#xB7; Product sourcing, embroidery and production subcontracting<br>&#xB7; Financials<br>&#xB7; Issuing quotes &amp; estimated lead times<br>&#xB7; Invoice processing"
      },
      {
        "title": "Ghost Tour Guide",
        "org": "Auld Reekie Tours",
        "date": "June 2004 – December 2004 (7 months)",
        "location": "",
        "desc": "Ghost tour guide in the summer of my 2nd year at university. Guiding groups of up to 60 people around Edinburgh&apos;s Royal Mile, into Auld Reekie&apos;s torture instrument museum and down into the vaults, telling stories of bodysnatchers, witch-hunting, poltergeists and guardi loo.<br>In addition, I also had some administration (customer enquiries, travel/accommodation<br>booking &amp; photocopying) and financial management activities (ticket sales &amp; banking) responsibilities."
      },
      {
        "title": "Property Management Trainee",
        "org": "AM Development",
        "date": "June 2003 – September 2003 (4 months)",
        "location": "",
        "desc": "&#x2022; Market research<br>&#x2022; Created a recording system for information collected<br>&#x2022; Marketing<br>&#x2022; Administration (customer enquiries, photocopying, stationary, invoicing &amp; faxing)<br>&#x2022; Translation of documents from Portuguese to English"
      },
      {
        "title": "Water sports sales & rental assistant",
        "org": "Agua Montanha Lazer",
        "date": "June 2000 – September 2000 (4 months)",
        "location": "",
        "desc": "&#x2022; Handled high volume cash transactions for rentals and sales<br>&#x2022; Organisation &amp; constant, on the spot updating of waiting list for rental equipment<br>&#x2022; Supported water skiing and knee boarding lessons.<br>&#x2022; Also manned the bricks and mortar shop, sole point of contact for customer service, information and sales<br>&#x2022; Gave health and safety training to all customers."
      }
    ]
  }
}
```


## tl;dr

Because LinkedIn has *blocked* the IP address of *any* server
running on the Amazon, Azure or DigitalOcean data center (*by IP range...*)
see: http://stackoverflow.com/a/32615188/1148249
we are unable to run a full end-to-end test on Travis-CI.

Our work-around for this is that Travis-CI tests our *parser*
but not our "*requester*". To run the *full* (*end-to-end*) test suite on
your local machine use the following command:

```sh
npm run full
```
