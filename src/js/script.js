$(document).ready(function(){

  $('.owl-carousel').owlCarousel({
    items: 1,
    dots: true
  });



  // $('a[href*=#]:not([href=#])').click(function() {
  //   if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
  //     var target = $(this.hash);
  //     target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
  //     if (target.length) {
  //       $('html,body').animate({
  //         scrollTop: target.offset().top
  //       }, 1000);
  //       return false;
  //     }
  //   }
  // });

  $('.j-request').on('click', function () {
    require(["mojo/signup-forms/Loader"], function (L) {
      L.start({"baseUrl": "mc.us13.list-manage.com", "uuid": "b72d9b54f584b4b190d5fc5f5", "lid": "e3096ec456"})
    });
  })

});