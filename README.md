# erdem.pl blog

[![CircleCI](https://circleci.com/gh/burnpiro/erdem.pl.svg?style=svg)](https://circleci.com/gh/burnpiro/erdem.pl)

My personal blog. Built with [Gatsby](https://www.gatsbyjs.org) and [Lumen](https://github.com/alxshelepenok/gatsby-starter-lumen) to help with templating.

### Firebase Configuration

* copy/paste your configuration from your Firebase project's dashboard into one of these files
  * *.env.development* and *.env.production* files (base on node env)
  * or just save them in your system variables (for production)

The *.env.development* and *.env.production* files could look like the following then:

```
GATSBY_API_KEY=AIzaSyBtxZ3phPeXcsZsRTySIXa7n33NtQ
GATSBY_AUTH_DOMAIN=app-s2233d64f8.firebaseapp.com
GATSBY_DATABASE_URL=https://app-s2233d64f8.firebaseio.com
GATSBY_PROJECT_ID=app-s2233d64f8
GATSBY_STORAGE_BUCKET=app-s2233d64f8.appspot.com
GATSBY_MESSAGING_SENDER_ID=701928454501
```


### Security Rules

In the Firebase console, go to Database, select "Realtime Database" -> Rules, and paste the rules below:

```
{
  "rules": {
    ".read": false,
    ".write": false,
    "users": {
      "$uid": {
        ".read": "$uid === auth.uid || root.child('users/'+auth.uid).child('roles').hasChildren(['ADMIN'])",
        ".write": "$uid === auth.uid || root.child('users/'+auth.uid).child('roles').hasChildren(['ADMIN'])"
      },
      ".read": "root.child('users/'+auth.uid).child('roles').hasChildren(['ADMIN'])",
      ".write": "root.child('users/'+auth.uid).child('roles').hasChildren(['ADMIN'])"
    },
    "interests": {
      ".indexOn": ["createdAt"],
      "$uid": {
        ".write": "data.exists() ? data.child('userId').val() === auth.uid : newData.child('userId').val() === auth.uid"
      },
      ".read": "auth != null",
      ".write": "auth != null",
    },
  }
}
```