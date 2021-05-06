const settings = {
  "name": "hostwp",
  "state": {
    "frontity": {
      "url": "https://hostwp.no/",
      "title": "HostWP",
      "description": "HostWp website"
    }
  },
  "packages": [
    {
      "name": "@aamodtgroup/agtech",
      "state": {
        "theme": {
          "menu": [],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://backend.hostwp.no",
          "homepage": "hjem",
          "postTypes": [
            {
              "type": "nyheter",
              "endpoint": "nyheter",
              "archive": "/nyheter",
            },
            {
              "type": "tjenester",
              "endpoint": "tjenester",
              "archive": "/tjenester",
            }
          ],
        }
      }
    },
    {
      "name": "@frontity/google-tag-manager-analytics",
      "state": {
        "googleTagManagerAnalytics": {
          "containerId": "GTM-5LQS338",
        }
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@aamodtgroup/frontity-contact-form-7",
    "@frontity/head-tags",
  ]
};

export default settings;