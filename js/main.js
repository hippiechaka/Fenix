$(window).load(function () {
    var $sync1 = $("#sync1"), //big photo
        $sync2 = $("#sync2"), //thumbs
        flag = false,
        duration = 300;

    $sync1.owlCarousel({
        items: 1,
        //center: true,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        stopOnHover: false,
       // loop:true,
        navText: ["<i class='fas fa-chevron-circle-left'></i>", "<i class='fas fa-chevron-circle-right'></i>"]
    }).on('changed.owl.carousel', function (e) {
        if (!flag) {
            flag = true;
            $sync2.trigger('to.owl.carousel', [e.item.index, duration, true]);
            flag = false;
        }
    });

    $sync2.owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        //center: true,
        nav: false,
        dots: false,
        autoplay : true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        stopOnHover: false
        //loop:true
    }).on('click', '.owl-item', function () {
        $sync1.trigger('to.owl.carousel', [$(this).index(), duration, true]);
    }).on('changed.owl.carousel', function (e) {
        if (!flag) {
            flag = true;
            $sync1.trigger('to.owl.carousel', [e.item.index, duration, true]);
            flag = false;
        }
    });
});


$(document).ready(function() {

/* ScrollNavigation  */

  $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          $(this).parent('li').parent('ul').parent('li').removeClass('open'); // oculta menu despues de hacer click
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: (target.offset().top *1) - ($("#mainMenu").height()*1)
            }, 1000, 'easeInOutExpo');
            return false;
          }
        }
      });
    });    

$("#frasesSlide").owlCarousel({
      animateOut: 'fadeOut',
      animateIn: 'flipInX',
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      nav: true,
      controls: true,
      items : 1,
      itemsMobile : true,
      loop:true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      navText: ["<i class='fas fa-angle-left' aria-hidden='true'></i>", "<i class='fas fa-angle-right' aria-hidden='true'></i>"]
  });

$("#slide-mision-vision").owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items:1,
        nav:true,
        navigation: true,
        controls:true,
        autoplay : true,
        pagination: true,
        stopOnHover: true,
        //lazyLoad: true,
        //addClassActive: true,
        loop:true,
        navText: ["<i class='fas fa-angle-left' aria-hidden='true'></i>", "<i class='fas fa-angle-right' aria-hidden='true'></i>"]
        // afterAction: afterAction,
        // onResized: matchHeight1
  });

$("#quienes-somos").owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items:1,
        nav:true,
        navigation: true,
        controls:true,
        autoplay : false,
        pagination: true,
        //stopOnHover: true,
        //lazyLoad: true,
        //addClassActive: true,
        loop:true,
        navText: ["<i class='fas fa-angle-left' aria-hidden='true'></i>", "<i class='fas fa-angle-right' aria-hidden='true'></i>"]
        // afterAction: afterAction,
        // onResized: matchHeight1
  });

/* Parallax */

  var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});
  new ScrollMagic.Scene({triggerElement: ".parallaxParent"})
    .setTween(".parallaxParent > div.bg-parallax", {y: "80%", ease: Linear.easeNone})
    // .addIndicators()
    .addTo(controller);

  var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});
  new ScrollMagic.Scene({triggerElement: ".parallaxParent2"})
    .setTween(".parallaxParent2 > div.bg-parallax2", {y: "80%", ease: Linear.easeNone})
    // .addIndicators()
    .addTo(controller);



$("#clientesGrid").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      nav: true,
      controls: true,
      items : 5,
      itemsMobile : true,
      loop:true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
              nav:true
          },
          600:{
              items:2,
              nav:true
          },
          1000:{
              items:4,
              nav:true,
              loop:true
          }
      },
      navText: ["<i class='fas fa-angle-left' aria-hidden='true'></i>", "<i class='fas fa-angle-right' aria-hidden='true'></i>"]
 
  });


});




/*
  $("#etc").click(function(){
      $(".content").css("display", "none");
      $(".main-procesoBTN").removeClass("current");
      $("#progenitoras-cont").fadeToggle();
      $(this).addClass("current");
      return false;
  });*/