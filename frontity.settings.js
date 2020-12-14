const settings = {
  "name": "caretas-2021",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      title: 'Caras & Caretas',
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      //"name": "@frontity/mars-theme",
      "name": "caretas-2021-theme",
      "state": {
        "theme": {
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
         // categoryBase: 'categoria',
          //"url": "https://www.carasycaretas.com.uy"
          //"url": "https://creatable-vacuums.000webhostapp.com",
          url: 'http://wp.pixie.com.uy'
          //"api": "https://creatable-vacuums.000webhostapp.com"
          //"url": "https://test.frontity.org"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@frontity/wp-comments",
    {
      name: '@frontity/google-ad-manager',
      state: {
        fills: {
          googleAdManager: {
            beforeHeaderAd: {
              slot: 'top-header',
              library: 'googleAdManager.GooglePublisherTag',
              priority: 5,
              props: {
                id: 'top-header-ad',
                unit: '/90767959/banner_top_home',
                size: [728, 90]
              }
            }
          }
        }
      }
    }
  ]
};

export default settings;
