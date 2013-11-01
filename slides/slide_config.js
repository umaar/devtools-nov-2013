var SLIDE_CONFIG = {
  // Slide settings
  settings: {
    title: 'What\'s new in the Chrome DevTools ',
    // subtitle: '',
    eventInfo: {
     title: 'DevFest London',
     date: '1/11/2013'
    },
    useBuilds: true, // Default: true. False will turn off slide animation builds.
    usePrettify: true, // Default: true
    enableSlideAreas: true, // Default: true. False turns off the click areas on either slide of the slides.
    enableTouch: true, // Default: true. If touch support should enabled. Note: the device must support touch.
    //analytics: 'UA-XXXXXXXX-1', // TODO: Using this breaks GA for some reason (probably requirejs). Update your tracking code in template.html instead.
    favIcon: 'images/google_developers_logo_tiny.png',
    fonts: [
      'Open Sans:regular,semibold,italic,italicsemibold',
      'Source Code Pro'
    ],
    theme: ['custom'], // Add your own custom themes or styles in /theme/css. Leave off the .css extension.
  },

  presenters: [{
    name: 'Umar Hansa',
    company: 'Web Developer<br>Shazam',
    gplus: 'https://google.com/+UmarHansa',
    twitter: '@umaar',
    www: 'http://umaar.github.io/devtools-nov-2013/slides/',
    github: 'http://github.com/umaar'
  }]
};

