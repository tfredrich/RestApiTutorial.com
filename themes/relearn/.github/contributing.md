# Guidelines

## For Development

- help us putting your code into production by opening a meaningful issue
- stay simple for the user by focusing on the mantra "convention over configuration"
- at installation the site should work reasonable without (m)any configuration
- stay close to the Hugo way
- don't use npm or any preprocessing, our contributors may not be front-end developers
- document new features in exampleSite
- don't break existing features if you don't have to
- remove reported issue from the browser's console
- be compatible to IE11, at least for main functionality, for Javascript this means:
  - test in IE11
  - check caniuse.com
  - don't use arrow functions
  - don't use template literals
  - don't use other fancy new ES5/6 stuff

## For Release

- create releases following [semver policy](https://semver.org/)
- we are using GitHub actions to create new releases
- a release is based on a milestone named like the release itself - just the version number, eg: 1.1.0
- remember that there have to be at least one closed issue assigned to the milestone
- the release action only runs successfully if all assigned issues for this milestone are closed
- the milestone itself will be closed during execution of the action
- a once released milestone can not be released again
