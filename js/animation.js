$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideToggle("slow");
});
$("#flip1").click(function(){
  $("#panel1").slideToggle("slow");
});
$("#flip2").click(function(){
  $("#panel2").slideToggle("slow");
});
$("#flip3").click(function(){
  $("#panel3").slideToggle("slow");
});
});
// fin animation flip/panel
// smooth scrool to panel

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


//Fixation de la barre de nav au scroll
// $(window).scroll(function (event) {
//     // A chaque fois que l'utilisateur va scroller (descendre la page)
//     var y = $(this).scrollTop(); // On récupérer la valeur du scroll vertical
//
//    //si cette valeur > à 200 on ajouter la class
//     // if (y >= 200) {
//     //   $('.nav').addClass('fixed');
//     // } else {
//     //   // sinon, on l'enlève
//     //   $('.nav').removeClass('fixed');
//     // }
//   });
// truc pour fixed la nav au scroll

//Effet de scroll plus fluide
$(document).ready(function(){
    // au clic sur un lien
    $('a[href^="#"]').on('click', function(evt){
       // bloquer le comportement par défaut: on ne rechargera pas la page
       evt.preventDefault();
       // enregistre la valeur de l'attribut  href dans la variable target
    var target = $(this).attr('href');
       /* le sélecteur $(html, body) permet de corriger un bug sur chrome
       et safari (webkit) */
    $('html, body')
       // on arrête toutes les animations en cours
       .stop()
       /* on fait maintenant l'animation vers le haut (scrollTop) vers
        notre ancre target */
       .animate({scrollTop: $(target).offset().top}, 1000 );
    });
});

// PORTFOLIO //

var $grid_demo_resize = $('#masonry_hybrid_demo3');
var grid3 = new MasonryHybrid($grid_demo_resize, {col: 3, space: 10});
// Use resize
var grid_resize = grid3.resize({
 celHeight : 180,
 sizeMap : [[2,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]],
 resize : true,
});
// Get Size Map
grid_resize.getSizeMap();
// Set Size Map & apply Size Map
grid_resize.setSizeMap([[2,2]]).applySize();
// Filter
grid3.grid.isotope({ filter: "filterValue" });
