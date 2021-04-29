/* TEST */
// (function($){
//     alert('JS opérationel !');
// })(jQuery);

/* BURGER */
$("#burger").click(function(){
    // $("#menu").slideToggle(300);
    $("#menu").toggleClass('burger');
});
