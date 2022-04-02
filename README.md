# NoTrust
Chrome extension that prevents you from visiting untrusted/dangerous sites.

### Todo for 1.0 release
- [ ] Decentralized database. 
Reasons for this decision:
  - I don't want to pay money for a server to host the data.
  - Make sure the data of everyone actually belongs to everyone.
  - There are no public and free REST APIs for retrieving SEO data, thus we need to create the data ourselfs.
- [x] Database SQL design:
  - Tables: sites visits ratings
  - Columns for sites: id(int) url(string) trust(boolean)
  - Columns for visits: site_id(int) timestamp(timestamp)
  - Columns for ratings: site_id(int) timestamp(timestamp) trust(boolean)
- [ ] Protect tables from bots/fake data.
- [ ] Remove url parameters before storing in database, since those may contain sensitive data.
- [ ] Extension overlay: Shows details about the current site.
- [ ] Extension icon: Shows the current sites' rating, with a colored background that is green if its trustworthy, otherwise red.
- [ ] Error html site: Stored locally. Gets loaded instead of the site to visit if its not trusted. 
- [ ] Trusted sites list per user: Stored locally. Sites get added to this list when the site was blocked, but the user still visited it. 
- [ ] The trust value of a site is either true or false. 
  - It gets set to true, if more than 70% of the total ratings are trusted.
  - It gets recalcullated by the user that visits the site, and then validated by another user.

### Todo for future releases
- [ ] Provide decentralized REST API for other applications to access our data.
