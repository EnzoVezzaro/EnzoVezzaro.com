/* jshint devel:true */
'use strict';

console.log('Look at app/js/main.js');

$(document).ready(function() {
    setTimeout(function(){
        $('.preloader').css('display', 'none');
  }, 5900);
    setTimeout(function(){
        $('.preloader-container').removeClass('preloader-container');
        $('.preloader-container').addClass('preloader-container-finished');
}, 6800);
  $('.card').css('display', 'none');
});

//tada notification
if ($('.new').hasClass('animated zoomIn')) {
  $('#notification').addClass('animated tada');
};

$('#notification').click(function () {
  $('.offcanvas').css('-webkit-transform', 'translateX(0px)');
  $('.new').removeClass('animated zoomIn');
  $('.new').addClass('animated zoomOut');
  $('#notification').removeClass('animated tada');
  $('#notification').addClass('animated bounceIn');
});

function messagge_open() {
  if ($('#message_input').hasClass('message_input')) {
    $('#message').addClass('animated bounceIn');
    $('#message_input').removeClass('message_input');
    $('#message_input').addClass('message_input_open');
  };
};

function messagge_closed() {
  if ($('#message_input').hasClass('message_input_open')) {
    $('#message').removeClass('animated bounceIn');
    $('#message_input').addClass('message_input');
    $('#message_input').removeClass('message_input_open');
  }
};

$('#message').click(messagge_open);
$('#x-message').click(messagge_closed);

$('#arrow').click(function () {
  if ($('#profile_settings').hasClass('profile_settings')) {
    $('#profile_settings').removeClass('profile_settings');
    $('#profile_settings').addClass('profile_settings_open');
  } else {
    $('#profile_settings').addClass('profile_settings');
    $('#profile_settings').removeClass('profile_settings_open');
  };
});

$('.notification').mouseleave(function () {
  $('.offcanvas').css('-webkit-transform', 'translateX(1100px)');
  $('#notification').removeClass('animated bounceIn');
});

$('#about').click(function () {
  $('.about-me').css('display', 'block');
  $('.card').css('display', 'none');
  $('.skills').css('display', 'none');
  $('.contact').css('display', 'none');
  $('.activities').css('display', 'none');
});

function work() {
  $('.about-me').css('display', 'none');
  $('.card').css('display', 'block');
  $('.skills').css('display', 'none');
  $('.contact').css('display', 'none');
  $('.activities').css('display', 'none');
};

$('#work').click(work);

$('#new_project').click(work);
$('#older_projects').click(work);

$('#skills').click(function () {
  $('.about-me').css('display', 'none');
  $('.card').css('display', 'none');
  $('.container').css('display', 'block');
  $('.skills').css('display', 'block');
  $('.contact').css('display', 'none');
  $('.activities').css('display', 'none');
});

$('#activities').click(function () {
  $('.about-me').css('display', 'none');
  $('.card').css('display', 'none');
  $('.container').css('display', 'block');
  $('.skills').css('display', 'none');
  $('.contact').css('display', 'none');
  $('.activities').css('display', 'block');
});

$('#contact').click(function () {
  $('.about-me').css('display', 'none');
  $('.card').css('display', 'none');
  $('.container').css('display', 'block');
  $('.skills').css('display', 'none');
  $('.activities').css('display', 'none');
  $('.contact').css('display', 'block');
});

//search
(function () {
  var morphSearch = document.getElementById('morphsearch'),
      input = morphSearch.querySelector('input.morphsearch-input'),
      ctrlClose = morphSearch.querySelector('span.morphsearch-close'),
      isOpen = isAnimating,
      isAnimating = false,

  // show/hide search area
  toggleSearch = function toggleSearch(evt) {
    // return if open and the input gets focused
    if (evt.type.toLowerCase() === 'focus' && isOpen) return false;

    var offsets = morphsearch.getBoundingClientRect();
    if (isOpen) {
      classie.remove(morphSearch, 'open');

      // trick to hide input text once the search overlay closes
      // todo: hardcoded times, should be done after transition ends
      if (input.value !== '') {
        setTimeout(function () {
          classie.add(morphSearch, 'hideInput');
          setTimeout(function () {
            classie.remove(morphSearch, 'hideInput');
            input.value = '';
          }, 300);
        }, 500);
      }

      input.blur();
    } else {
      classie.add(morphSearch, 'open');
    }
    isOpen = !isOpen;
  };

  // events
  input.addEventListener('focus', toggleSearch);
  ctrlClose.addEventListener('click', toggleSearch);
  // esc key closes search overlay
  // keyboard navigation events
  document.addEventListener('keydown', function (ev) {
    var keyCode = ev.keyCode || ev.which;
    if (keyCode === 27 && isOpen) {
      toggleSearch(ev);
    }
  });

  /***** for demo purposes only: don't allow to submit the form *****/
  morphSearch.querySelector('button[type="submit"]').addEventListener('click', function (ev) {
    ev.preventDefault();
  });
})();

//twitter-timeline
!(function (d, s, id) {
  var js,
      fjs = d.getElementsByTagName(s)[0],
      p = /^http:/.test(d.location) ? 'http' : 'https';if (!d.getElementById(id)) {
    js = d.createElement(s);js.id = id;js.src = p + '://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js, fjs);
  }
})(document, 'script', 'twitter-wjs');

//facebook
(function (d, s, id) {
  var js,
      fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);js.id = id;
  js.src = '//connect.facebook.net/it_IT/sdk.js#xfbml=1&version=v2.4&appId=1657362801164157';
  fjs.parentNode.insertBefore(js, fjs);
})(document, 'script', 'facebook-jssdk');
//# sourceMappingURL=main.js.map
