// (function($){
//     alert('JS opérationel !');
// })(jQuery);

// (function(){
//     $('#burger').click(function(e){
//         e.preventDefault();
//         $('#menu').toggleClass('burger');
//     });
// })(jQuery);

// Modification
$("#burger").click(function(){
    // $("#menu").slideToggle(300);
    $("#menu").toggleClass('burger');
});