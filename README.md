# NoTrust
Chrome extension that blocks you from visiting untrusted/dangerous sites.

### Todo for 1.0 release
- [ ] Decentralized database that stores the trust score of a site, as well as the amount of clicks and the ratings a site receives. 
Reasons for this decision:
  - I don't want to pay money for a server to host the data.
  - Make sure the data of everyone actually belongs to everyone.
  - There are no public and free REST APIs for retrieving SEO data, thus we need to create the data ourselfs.
- [ ] Allow user to rate a site.
- [ ] Block site from loding when trust score not high enough and display error html page.
- [ ] Create trust score.
  - Number between 0 and 10, where 0 means the site should not be trusted and 10 that it is trustworthy.
  - Minimum trust score of 7 needed otherwise block access.
  - Every site has a default trust score of 0

### Todo for future releases
- [ ] Provide decentralized REST API for other applications to access our data.
