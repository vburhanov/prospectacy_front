/* global document */

const $ = require('jquery');
var fix =  $('.about__inner__firstbl');  // navigation block
var wrapper = $('.about__inner');        // may be: navbar.parent();

$(window).scroll(function(){
    var nsc = $(document).scrollTop();
    var bp1 = wrapper.offset().top;
    var bp2 = bp1 + wrapper.outerHeight()-$(window).height();

    if (nsc>bp1) {  fix.animate({'position':'fixed'},1000); }
    else { fix.animate({'position':'absolute'},2000); }
    if (nsc>bp2) { fix.css('top', bp2-nsc); }
    else { fix.css('top', '30%'); }
});
