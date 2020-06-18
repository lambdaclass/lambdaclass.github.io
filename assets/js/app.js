document.addEventListener("DOMContentLoaded", function () {
  setVh();

  let body = document.getElementsByTagName("html")[0];

  const trigger = document.getElementById("menu-trigger");
  if (trigger) {
    trigger.addEventListener("click", function () {
      body.classList.add("menu-opened");
      setTimeout(() => {
        body.classList.add("menu-animated");
      }, 10);
    });
  }

  const closeMenu = document.getElementById("close-menu");
  if (closeMenu) {
    closeMenu.addEventListener("click", function () {
      body.classList.remove("menu-animated");
      setTimeout(() => {
        body.classList.remove("menu-opened");
      }, 300);
    });
  }

  let buttons = document.querySelectorAll("header nav a");
  if (buttons.length) {
    buttons.forEach((element) => {
      element.addEventListener("click", () => {
        body.classList.remove("menu-animated");
        setTimeout(() => {
          body.classList.remove("menu-opened");
        }, 300);
      });
    });
  }
});

function setVh() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

function blink() {
  TweenLite.to('.light, .light-3', 1, {
    autoAlpha: 1, fill: '#ffb0ff',
    ease: Elastic.easeOut.config(1, 0.3),
    delay: 2,
    onComplete: function() {
      TweenLite.to('.light, .light-3', 2, {
        autoAlpha: 1,
        fill: '#7a788e',
        delay: 2,
        ease: Elastic.easeOut.config(1, 0.3),
        onComplete: blink
      });
    }
  });
}
function blink_new() {
  TweenLite.to('.light-2, .light-4', 2, {
    autoAlpha: 1, fill: '#ffb0ff',
    ease: Elastic.easeOut.config(1, 0.3),
    delay: 1,
    onComplete: function() {
      TweenLite.to('.light-2, .light-4', 2, {
        autoAlpha: 1,
        fill: '#7a788e',
        delay: 2,
        ease: Elastic.easeOut.config(1, 0.3),
        onComplete: blink_new
      });
    }
  });
}

blink();
blink_new();
TweenMax.set('#line-holder', {
  opacity: 1
});
TweenMax.staggerFromTo('#bright-lines', 3, {
  drawSVG: "0% 3%",
}, {
    drawSVG: "97% 100%",
    repeat: -1,
    yoyo: false,
    ease: Sine.easeOut
  }, 'start');
TweenMax.staggerFromTo('#bright-lines-ending', 3, {
  drawSVG: "97% 100%",
}, {
    drawSVG: "0% 3%",
    repeat: -1,
    yoyo: false,
    ease: Sine.easeOut
  }, 'start');

// Done
TweenMax.staggerFromTo('#signal', 4, {
  scaleY: 0, transformOrigin: "bottom"
}, {
    scaleY: 1,
    repeat: -1,
    yoyo: true,
    ease: SlowMo.ease.config(0.2, 0.2, true)
  }, 0.5, 'start');
// Done
TweenMax.staggerFromTo('.ball', 2, {
  y: 0, transformOrigin: "bottom"
}, {
    y: -20,
    repeat: -1,
    yoyo: true,
    ease: SlowMo.ease.config(0.2, 0.2, true)
  }, 0.5, 'start');
// Done
TweenMax.staggerFromTo('#glow-line', 0.7, {
  opacity: 1, y: 3, drawSVG: "0%"
}, {
    y: -6,
    opacity: 0,
    drawSVG: "70%",
    repeat: -1,
    yoyo: false,
    ease: SlowMo.ease.config(0.2, 0.2, false)
  }, 0.5, 'start');
// Done
TweenMax.staggerFromTo('#glow-box', 1, {
  opacity: 0.7
}, {
    cycle: {
      opacity: [0.2, 0.4, 0.1, 0.9, 1]
    },
    repeat: -1,
    yoyo: true,
    ease: Sine.easeInOut
  }, 0.1, 'start');

TweenMax.staggerFromTo('#pie-blue, #pie-red', 2, {
  opacity: 1, y: 0
}, {
    y: -3,
    cycle: {
      opacity: [0.2, 0.4, 0.6, 0.4, 0.2]
    },
    repeat: -1,
    yoyo: true,
    ease: Power4.easeInOut
  }, 0.5, 'start');

//Done
function wifi() {
  var tl = new TimelineLite({
    onComplete: function () {
      this.restart();
    }
  });
  tl.to('#wifi *', 0.5, { opacity: 0 });
  tl.to('#wifi #one', 0.5, { opacity: 1 });
  tl.to('#wifi #two', 0.5, { opacity: 1 });
  tl.to('#wifi #three', 0.5, { opacity: 1 });
  tl.to('#wifi #four', 0.5, { opacity: 1 });
  return tl;
}
wifi();

TweenMax.set('#circle-0', {
  opacity: 0
});
TweenMax.set("#circle", {
  y: 18,
});
TweenMax.set("#circle-2", {
  y: 64,
});
TweenMax.fromTo('#circle-2', 2, {
   opacity:1, x: 1
},{
  opacity: 0,
   y: -17,
   repeat: -1,
    yoyo: false,
    ease: Power4.easeOutIn
});
TweenMax.fromTo('#circle', 2, {
   opacity: 1, x: -2
}, {
    y: -70,
    opacity: 0,
    repeat: -1,
    yoyo: false,
    ease: Power4.easeOutIn
  });
TweenMax.staggerFromTo('#pie-circle', 3, {
  opacity: 1,  drawSVG: "0%"
}, {
    opacity: 0,
    drawSVG: "70%",
    repeat: -1,
    yoyo: false,
    ease: SlowMo.easeOutIn
  }, 0.5, 'start');

var contactBtn = document.getElementById('contact--btn');
contactBtn.addEventListener('click', function() {
  TweenMax.to(window, 2, {scrollTo:{y:'#contact'}});
});




// TODO: Google Map customization 
 google.maps.event.addDomListener(window, 'load', init);
    function init() {
        var mapOptions = {
          zoom: 16,
          scrollwheel: false, 
          navigationControl: false,
          center: new google.maps.LatLng(-34.6096984,-58.3853352),
          styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},
          {"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},
          {"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},
          {"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},
          {"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},
          {"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},
          {"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},
          {"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},
          {"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},
          {"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},
          {"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},
          {"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},
          {"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
      };
      var mapElement = document.getElementById('lambda-map');
      var map = new google.maps.Map(mapElement, mapOptions);
      var marker = new google.maps.Marker({
          position: new google.maps.LatLng(-34.6096984, -58.3831465),
          map: map,
          title: 'Lambda SAS'
      });
    }
