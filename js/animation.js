$(document).ready(function() {
    $("#formul").hide();
    $("#panel").hide();
    $("#panel1").hide();
    $("#panel2").hide();
    $("#panel3").hide();

    $("#flip").click(function() {
        $("#panel").slideToggle("slow");
        $("#panel1").hide();
        $("#panel2").hide();
        $("#panel3").hide();
    });
    $("#flip1").click(function() {
        $("#panel1").slideToggle("slow");
        $("#panel").hide();
        $("#panel2").hide();
        $("#panel3").hide();
    });
    $("#flip2").click(function() {
        $("#panel2").slideToggle("slow");
        $("#panel").hide();
        $("#panel1").hide();
        $("#panel3").hide();
    });
    $("#flip3").click(function() {
        $("#panel3").slideToggle("slow");
        $("#panel").hide();
        $("#panel1").hide();
        $("#panel2").hide();
    });
    // formulaire
    $(".clickContact").click(function() {
        $("#formul").toggle('slow');
        $("form").animate({
          height: '430px',
          width: '330px',
      });
    });

    // truc pour scroll
//     $('a[href*="#"]:not([href="#"])').click(function() {
//         if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
//             var target = $(this.hash);
//             target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//             if (target.length) {
//                 $('html, body').animate({
//                     scrollTop: target.offset().top
//                 }, 1000);
//                 return false;
//             }
//         }
//     });
// //Effet de scroll plus fluide
//     $('a[href^="#"]').on('click', function(evt) {
//         // bloquer le comportement par défaut: on ne rechargera pas la page
//         evt.preventDefault();
//         // enregistre la valeur de l'attribut  href dans la variable target
//         var target = $(this).attr('href');
//         /* le sélecteur $(html, body) permet de corriger un bug sur chrome
//         et safari (webkit) */
//         $('html, body')
//             // on arrête toutes les animations en cours
//             .stop()
//             /* on fait maintenant l'animation vers le haut (scrollTop) vers
//              notre ancre target */
//             .animate({
//                 scrollTop: $(target).offset().top
//             }, 1000);
//     });

});
