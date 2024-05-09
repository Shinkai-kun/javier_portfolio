// $(document).ready(function () {
//     $('.menu-toggle').click(function () {
//         $('nav').toggleClass('active');
//     })
//     $("ul li").click(function () {
//         $(this).siblings().removeClass("active");
//         $(this).toggleClass("active");
//     })
// })
$(window).on('load', function () { // makes sure the whole site is loaded 

    $('#status').delay(3000).fadeOut(); // will first fade out the loading animation 
    $('#preloader').delay(3000).fadeOut('slow'); // will fade out the white DIV that covers the website. 
    $('body').delay(350).css({ 'overflow': 'visible' },);
})