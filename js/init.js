(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $(".button-collapse").sideNav();
    $(".riffy-side-nav-btn").sideNav();
    $('.collapsible').collapsible();
    $('.modal').modal({
      startingTop: '4%',
      endingTop: '10%'
    });
    $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false,
      hover: false,
      belowOrigin: false,
      alignment: "left",
      stopPropagation: false
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space
