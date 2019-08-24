const ready = require('./utils/documentReady.js');

ready(function(){
  console.log('DOM героически построен!');
});

const $ = require('jquery');
// const skrol = require('skrollr');
$( document ).ready(function() {
  skrollr.init({
    smoothScrolling: false,
    mobileDeceleration: 0.004
  });
});
