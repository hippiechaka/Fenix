$(document).ready(function(){
  
  $("#slide-kenburns").owlCarousel({
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
        navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"]
        // afterAction: afterAction,
        // onResized: matchHeight1
  });

  //matchHeight1();
});

/*
function matchHeight1(){
  $('#sidebar-initial').matchHeight({
    target: $('#slide-kenburns')
  });
}
*/
/*
function changeClass(slide){

    setTimeout(function(){

         $("#slide-kenburns .owl-item").each(function(){
          if ($(this).index() === slide){
            $(this).addClass("active");
          } else{
           $(this).removeClass("active");
          }
        });

    },500);
  }

function afterAction(){
  changeClass(this.owl.currentItem);
}
*/